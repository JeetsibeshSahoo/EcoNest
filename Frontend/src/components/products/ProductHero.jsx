import React from 'react'
import Container from '../common/Container'

function ProductHero() {
  return (
    <section className='bg-[#F7F6F1] py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#687D73]'>
                    Our collection
                </p>

                <h1 className='text-4xl font-semibold tracking-tight text-[#173F35] sm:text-5xl'>
                    Thoughtful products for everyday living.
                </h1>

                <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg'>
                    Explore our collection of practical, beautiful products designed to make more conscious choices feel simple.
                </p>
            </div>
        </Container>
    </section>
  )
}

export default ProductHero
