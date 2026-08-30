import React from 'react'
import Container from "../common/Container"
import Button from "../common/Button"

function Hero() {
  return (
    <section className='overflow-hidden bg-[#F7F6F1]'>
        <Container>
            <div className='grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24'>
                <div className='max-w-xl'>
                    <p className='mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
                        Eco-friendly living
                    </p>

                    <h1 className='font-serif text-5xl leading-[1.05] tracking-tight text-[#17201D] sm:text-6xl lg:text-8xl'>
                        Sustainable living, <span className='text-[#173F35] block'>
                            thoughtfully designed.
                        </span>
                    </h1>

                    <p className='mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg'>
                        Better products for your everyday life, designed with
                        simplicity, quality, and sustainability in mind.
                    </p>

                    <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                        <Button to="/products">
                            Explore Products
                        </Button>

                        <Button to="/about" variant='outline'>
                            Our story
                        </Button>
                    </div>
                </div>

                <div className='relative'>
                    <div className='overflow-hidden rounded-3xl'>
                        <img 
                        src="/assets/images/hero/hero.jpg" 
                        alt="Eco-friendly products in a modern natural setting" 
                        className='h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]'
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero
