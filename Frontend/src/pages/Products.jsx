import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import Container from "../components/common/Container"
import ProductHero from "../components/products/ProductHero"
import ProductControls from "../components/products/ProductControls"
import ProductGrid from "../components/products/ProductGrid"
import { categories } from "../data/categories"
import { products } from "../data/products"
import useDocumentTitle from "../hooks/useDocumentTitle"

const validSortOptions = [
  "default",
  "price-low",
  "price-high",
  "name-asc",
  "name-desc",
]

function Products() {

  useDocumentTitle("Products | Econest");
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get("search") || ""
  const requestedCategory = searchParams.get("category") || "All"
  const requestedSort = searchParams.get("sort") || "default"

  const activeCategory = categories.some(
    (category) => category.name === requestedCategory
  )
    ? requestedCategory
    : "All"

  const sortOption = validSortOptions.includes(requestedSort)
    ? requestedSort
    : "default"

  const updateSearchParams = (updates) => {
    const nextParams = new URLSearchParams(searchParams)

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "All" || value === "default") {
        nextParams.delete(key)
        return
      }

      nextParams.set(key, value)
    })

    setSearchParams(nextParams)
  }

  const filteredProducts = useMemo(() => {
    const normalizedSearchQuery =
      searchQuery.trim().toLowerCase()

    const result = products.filter((product) => {
      const matchesSearch =
        normalizedSearchQuery === "" ||
        product.name
          .toLowerCase()
          .includes(normalizedSearchQuery) ||
        product.description
          .toLowerCase()
          .includes(normalizedSearchQuery) ||
        product.category
          .toLowerCase()
          .includes(normalizedSearchQuery)

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory

      return matchesSearch && matchesCategory
    })

    return [...result].sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price

        case "price-high":
          return b.price - a.price

        case "name-asc":
          return a.name.localeCompare(b.name)

        case "name-desc":
          return b.name.localeCompare(a.name)

        default:
          return 0
      }
    })
  }, [searchQuery, activeCategory, sortOption])

  const handleSearchChange = (value) => {
    updateSearchParams({
      search: value,
    })
  }

  const handleCategoryChange = (value) => {
    updateSearchParams({
      category: value,
    })
  }

  const handleSortChange = (value) => {
    updateSearchParams({
      sort: value,
    })
  }

  return (
    <>
      <ProductHero />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10">
            <ProductControls
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              sortOption={sortOption}
              onSortChange={handleSortChange}
            />
          </div>

          <div className="mb-8">
            <p
              className="text-sm text-gray-500"
              aria-live="polite"
            >
              {filteredProducts.length === 0 ? (
                <>
                  No products found
                  {searchQuery.trim() && (
                    <>
                      {" "}
                      for{" "}
                      <span className="font-medium text-[#173F35]">
                        "{searchQuery.trim()}"
                      </span>
                    </>
                  )}
                  {activeCategory !== "All" && (
                    <>
                      {" "}
                      in{" "}
                      <span className="font-medium text-[#173F35]">
                        {activeCategory}
                      </span>
                    </>
                  )}
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="font-medium text-[#173F35]">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1
                    ? "product"
                    : "products"}
                  {searchQuery.trim() && (
                    <>
                      {" "}
                      for{" "}
                      <span className="font-medium text-[#173F35]">
                        "{searchQuery.trim()}"
                      </span>
                    </>
                  )}
                  {activeCategory !== "All" && (
                    <>
                      {" "}
                      in{" "}
                      <span className="font-medium text-[#173F35]">
                        {activeCategory}
                      </span>
                    </>
                  )}
                </>
              )}
            </p>
          </div>

          <ProductGrid products={filteredProducts} />
        </Container>
      </section>
    </>
  )
}

export default Products