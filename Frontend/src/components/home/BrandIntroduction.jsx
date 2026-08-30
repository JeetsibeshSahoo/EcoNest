import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'

function BrandIntroduction() {
  return (
    <section className='bg-white py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
                    Eco-friendly living
                </p>

                <h2 className='mt-4 font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl lg:text-6xl'>
                    Thoughtful products for a more conscious everyday life.
                </h2>

                <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
                    At EcoNest, we believe sustainable choices should feel
                    simple, beautiful, and accessible. We carefully select
                    products that combine everyday functionality with a
                    more thoughtful approach to the world around us.
                </p>

                <div className='mt-8'>
                    <Button to="/about" variant='primary'>
                        Discover Our Story
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BrandIntroduction
