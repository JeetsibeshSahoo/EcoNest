import { useMemo, useState } from 'react'
import ProductHero from '../components/products/ProductHero'
import Container from '../components/common/Container'
import CategoryFilter from '../components/products/CategoryFilter'
import ProductGrid from '../components/products/ProductGrid'
import { products } from '../data/products'
import ProductControls from '../components/products/ProductControls'

function Products() {

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const normalizedSearchQuery = searchQuery.trim().toLowerCase();

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

      const matchesCategory = activeCategory === "All" || product.category === activeCategory

      return matchesSearch && matchesCategory
    });

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
  }, [searchQuery, activeCategory, sortOption]);

  return (
    <>
      <ProductHero />

      <section className='py-16 sm:py-20'>
        <Container>
          <div className='mb-10'>
            <ProductControls 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </div>

          <div className='mb-8 flex items-center justify-between'>
            <p 
              className='text-sm text-gray-500'
              aria-live='polite'
            >
              Showing{" "}
              <span className='font-medium text-[#173F35]'>
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <ProductGrid products={filteredProducts} />

        </Container>
      </section>
    </>
  )
}

export default Products
