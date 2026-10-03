import { categories } from "../../data/categories"

function CategoryFilter({ activeCategory, onCategoryChange }) {

  const baseButtonClasses = "rounded-full border px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"

  const getButtonClasses = (categoryName) => {
    const isActive = activeCategory === categoryName

    return `${baseButtonClasses} ${
      isActive ? "border-[#173F35] bg-[#173F35] text-white" : "border-gray-300 text-gray-600 hover:border-[#173F35] hover:text-[#173F35]"
    }`
  }

  return (
    <nav aria-label="Product categories">
      <div className="flex flex-wrap gap-3">
        <button
        type="button"
        onClick={() => onCategoryChange("All")}
        className={getButtonClasses("All")}
        aria-pressed={activeCategory === "All"}
        >
          All
        </button>

        {categories.map((category) => (
          <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.name)}
          className={getButtonClasses(category.name)}
          aria-pressed={activeCategory === category.name}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default CategoryFilter
