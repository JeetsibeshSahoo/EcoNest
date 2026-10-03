import React from 'react'
import Container from '../common/Container'
import { homeCta } from '../../data/home'
import Button from '../common/Button'

function HomeCTA() {
  return (
    <section className='bg-[#173F35] py-20 sm:py-24 lg:py-28'>
        <Container>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>
                    {homeCta.eyebrow}
                </p>

                <h2 className='mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl'>
                    {homeCta.title}
                </h2>

                <p className='mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8'>
                    {homeCta.description}
                </p>

                <div className='mt-8'>
                    <Button
                    to="/products"
                    variant='light'
                    >
                        Explore Products
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeCTA
