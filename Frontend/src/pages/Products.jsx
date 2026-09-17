import { useState } from 'react'
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

          <ProductGrid products={filteredProducts} />

        </Container>
      </section>
    </>
  )
}

export default Products
