import { Search } from "lucide-react"
import CategoryFilter from "./CategoryFilter"

function ProductControls({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <label
            htmlFor="product-search"
            className="sr-only"
          >
            Search products
          </label>

          <input
            id="product-search"
            type="search"
            value={searchQuery}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-[#173F35] focus:ring-2 focus:ring-[#173F35]/20"
          />
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="product-sort"
            className="shrink-0 text-sm font-medium text-gray-600"
          >
            Sort by
          </label>

          <select
            id="product-sort"
            value={sortOption}
            onChange={(event) =>
              onSortChange(event.target.value)
            }
            className="min-w-44 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-[#173F35] focus:ring-2 focus:ring-[#173F35]/20"
          >
            <option value="default">Featured</option>
            <option value="price-low">
              Price: Low to High
            </option>
            <option value="price-high">
              Price: High to Low
            </option>
            <option value="name-asc">
              Name: A to Z
            </option>
            <option value="name-desc">
              Name: Z to A
            </option>
          </select>
        </div>
      </div>

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  )
}

export default ProductControls