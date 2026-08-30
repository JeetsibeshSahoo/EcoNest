import React from 'react'
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import Hero from '../components/home/Hero';
import BrandIntroduction from '../components/home/BrandIntroduction';
import CategorySection from '../components/home/CategorySection';

function Home() {
  return (
    <main>
      <Hero />
      <BrandIntroduction />
      <CategorySection />
    </main>
  )
}

export default Home;
