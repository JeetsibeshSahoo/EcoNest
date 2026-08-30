import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'


function ProductCard({ product }) {
  return (
    <article className='group'>
        <Link
        to={`/products/${product.slug}`}
        className='block'
        >
            <div className='relative aspect-square overflow-hidden rounded-2xl bg-gray-100'>
                <img 
                src={product.image} 
                alt={product.name}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <span className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173F35] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100'>
                    <ArrowUpRight size={18} />
                </span>
            </div>
        </Link>

        <div className='mt-4'>
            <p className='text-xs font-semibold uppercase tracking-[0.15em] text-gray-500'>
                {product.category}
            </p>

            <div className='mt-1 flex items-start justify-between gap-4'>
                <Link
                to={`/products/${product.slug}`}
                className='font-medium text-[#17201D] transition-colors hover:text-[#173F35]'
                >
                    {product.name}
                </Link>

                <span className='shrink-0 font-semibold text-[#173F35]'>
                    ${product.price}
                </span>
            </div>
        </div>
    </article>
  )
}

export default ProductCard
