import React from 'react'

import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"

function EmptyCart() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-[#173F35]">
          <ShoppingBag size={28} aria-hidden="true" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#173F35]">
          Your cart is empty
        </h1>

        <p className="mt-3 text-base leading-7 text-gray-500">
          Looks like you haven't added anything to your cart yet.
          Explore our products and find something you love.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  )
}

export default EmptyCart
