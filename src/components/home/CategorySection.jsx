import React from 'react'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { categories } from '../../data/categories'
import CategoryCard from './CategoryCard'

function CategorySection() {
  return (
    <section className='bg-[#F7F6F1] py-20 sm:py-24 lg:py-32'>
        <Container>
            <SectionTitle
            eyebrow="Explore"
            title="Shop by category"
            description="Discover thoughtfully selected essentials designed to make everyday living simpler and more sustainable." 
            />

            <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16'>
                {categories.map((category) => (
                    <CategoryCard 
                    key={category.id}
                    category={category}
                    />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default CategorySection
