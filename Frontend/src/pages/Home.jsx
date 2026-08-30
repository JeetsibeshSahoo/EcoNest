import React from 'react'
import Hero from '../components/home/Hero';
import BrandIntroduction from '../components/home/BrandIntroduction';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';

function Home() {
  return (
    <main>
      <Hero />
      <BrandIntroduction />
      <CategorySection />
      <FeaturedProducts />
    </main>
  )
}

export default Home;
