import React from 'react'
import { categories } from "../../data/categories"

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div>
      <button
      type='button'
      onClick={() => onCategoryChange("All")}
      className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
        activeCategory === "All"
            ? "border-[#173F35] bg-[#173F35] text-white" : "border-gray-300 text-gray-600 hover:border-[#173F35] hover:text-[#173F35]"
      }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
        key={category.id}
        type='button'
        onClick={() => onCategoryChange(category.name)}
        className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
            activeCategory === category.name
                ? "border-[#173F35] bg-[#173F35] text-white" : "border-gray-300 text-gray-600 hover:border-[#173F35] hover:text-[#173F35]"
        }`}
        >
            {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
