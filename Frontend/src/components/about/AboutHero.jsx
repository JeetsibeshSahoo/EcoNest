import React from 'react'
import Container from "../common/Container"
import { aboutHero } from '../../data/about'

function AboutHero() {
  return (
    <section className='bg-[#F7F6F1] py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='mx-auto max-w-4xl text-center'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
                    {aboutHero.eyebrow}
                </p>

                <h1 className='mt-5 font-serif text-5xl leading-tight text-[#17201D] sm:text-6xl lg:text-7xl'>
                    {aboutHero.title}
                </h1>

                <p className='mx-auto mt-7 max-w-2xl text-base leading-tight text-gray-600 sm:text-lg sm:leading-8'>
                    {aboutHero.description}
                </p>
            </div>
        </Container>
    </section>
  )
}

export default AboutHero
