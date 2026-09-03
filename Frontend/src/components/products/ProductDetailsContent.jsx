import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"


function ProductDetailsContent({ product }) {
    return (
    <section className="py-8 sm:py-12">
      <Container>
        <Link
          to="/products"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#173F35] sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-semibold text-[#173F35]">
              ₹{product.price}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="w-full rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 sm:w-auto"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetailsContent
