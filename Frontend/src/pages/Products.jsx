import React, { useState } from 'react'
import ProductHero from '../components/products/ProductHero'
import Container from '../components/common/Container'
import CategoryFilter from '../components/products/CategoryFilter'
import ProductGrid from '../components/products/ProductGrid'
import { products } from '../data/products'

function Products() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <ProductHero />

      <section className='py-16 sm:py-20'>
        <Container>
          <div className='mb-10'>
            <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            />
          </div>

          <div className='mb-8 flex items-center justify-between'>
            <p className='text-sm text-gray-500'>
              Showing{" "}
              <span className='font-medium text-[#173F35]'>
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className='py-20 text-center'>
              <h2 className='text-xl font-semibold text-[#173F35]'>
                No products found
              </h2>
              <p className='mt-2 text-gray-500'>
                Try selecting a different category.
              </p>
            </div>
          )}

        </Container>
      </section>
    </>
  )
}

export default Products
