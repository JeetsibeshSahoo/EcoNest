import React from 'react'
import Container from '../common/Container'
import { aboutStory } from '../../data/about'

function AboutStory() {
  return (
    <section className='bg-white py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                <div className='overflow-hidden rounded-3xl'>
                    <img 
                    src={aboutStory.image} 
                    alt="The story behind EcoNest"
                    className='h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]'
                    />
                </div>

                <div className='max-w-xl'>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]">
                        {aboutStory.eyebrow}
                    </p>

                    <h2 className="mt-4 font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl">
                        {aboutStory.title}
                    </h2>

                    <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                        {aboutStory.description}
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutStory
