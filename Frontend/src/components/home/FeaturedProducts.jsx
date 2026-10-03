import React from 'react'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { Link } from 'react-router-dom'
import ProductGrid from '../products/ProductGrid'
import { products } from "../../data/products"


function FeaturedProducts() {

    const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className='bg-white py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
                <SectionTitle 
                eyebrow="Our collection"
                title="Every essentials, thoughtfully selected."
                description="Explore a collection of practical products designed to bring simplicity and sustainability into everyday life"
                />
                
                <Link
                to="/products"
                className='text-sm font-semibold text-[#173F35] underline decoration-[#8FAF9F] decoration-2 underline-offset-4 transition-colors hover:text-[#17201D]'
                >
                View all products
                </Link>
            </div>

            <div className='mt-12 lg:mt-16'>
                <ProductGrid products={featuredProducts} />
            </div>
        </Container>
    </section>
  )
}

export default FeaturedProducts
