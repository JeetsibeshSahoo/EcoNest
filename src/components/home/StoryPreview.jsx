import React from 'react'
import Container from '../common/Container'
import { storyPreview } from '../../data/home'
import Button from '../common/Button'

function StoryPreview() {
  return (
    <section className='bg-white py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                <div className='overflow-hidden rounded-2xl'>
                    <img 
                    src={storyPreview.image} 
                    alt="EcoNest brand story"
                    className='h-[420px] w-full object-cover sm:h-[520px]' 
                    />
                </div>

                <div className='max-w-xl'>
                    <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
                        {storyPreview.eyebrow}
                    </p>

                    <h2 className='mt-4 font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl'>
                        {storyPreview.title}
                    </h2>

                    <p className='mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
                        {storyPreview.description}
                    </p>

                    <div className='mt-8'>
                        <Button to="/about">
                            Read Our Story
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default StoryPreview
