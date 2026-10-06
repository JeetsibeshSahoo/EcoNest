import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'
import AboutMission from '../components/about/AboutMission'
import AboutValues from '../components/about/AboutValues'
import AboutCTA from '../components/about/AboutCTA'
import useDocumentTitle from '../hooks/useDocumentTitle'

function About() {

  useDocumentTitle("About | Econest");

  return (
    <main aria-label='About EcoNest'>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </main>
  )
}

export default About
