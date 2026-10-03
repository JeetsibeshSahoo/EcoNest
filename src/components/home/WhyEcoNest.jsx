import React from 'react'
import { Check } from 'lucide-react'
import Container from '../common/Container'
import { whyEcoNest } from '../../data/home'
import Button from '../common/Button'

function WhyEcoNest() {
  return (
    <section className='bg-[#F7F6F1] py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                <div className='overflow-hidden rounded-3xl'>
                    <img 
                    src={whyEcoNest.image} 
                    alt="Thoughtfully selected sustainable products" 
                    className='h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]'
                    />
                </div>

                <div className='max-w-xl'>
                    <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
                        {whyEcoNest.eyebrow}
                    </p>

                    <h2 className='mt-4 font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl'>
                        {whyEcoNest.title}
                    </h2>

                    <p className='mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
                        {whyEcoNest.description}
                    </p>

                    <ul className='mt-8 space-y-4'>
                        {whyEcoNest.benefits.map((benefit) => (
                            <li
                            key={benefit}
                            className='flex items-center gap-3 text-sm font-medium text-[#17201D] sm:text-base'
                            >
                                <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#173F35] text-white'>
                                    <Check size={15} />
                                </span>

                                {benefit}
                            </li>
                        ))}
                    </ul>

                    <div className='mt-8'>
                        <Button to="/about">
                            Learn More About Us
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyEcoNest
