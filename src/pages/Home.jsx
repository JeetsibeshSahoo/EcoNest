import Hero from '../components/home/Hero';
import BrandIntroduction from '../components/home/BrandIntroduction';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyEcoNest from '../components/home/WhyEcoNest';
import StoryPreview from '../components/home/StoryPreview';
import HomeCTA from '../components/home/HomeCTA';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {

  useDocumentTitle("Econest | Sustainable Living");

  return (
    <main>
      <Hero />
      <BrandIntroduction />
      <CategorySection />
      <FeaturedProducts />
      <WhyEcoNest />
      <StoryPreview />
      <HomeCTA />
    </main>
  )
}

export default Home;
