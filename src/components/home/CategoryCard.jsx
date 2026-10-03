import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from "lucide-react"

function CategoryCard({ category }) {
  return (
    <Link
    to={category.path}
    className='group relative block overflow-hidden rounded-3xl'
    >
        <div className='aspect-[3/2] overflow-hidden'>
            <img 
            src={category.image} 
            alt={category.name} 
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
        </div>

        <div className='absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40' />

        <div className='absolute inset-x-0 bottom-0 p-6 text-white sm:p-8'>
            <div className='flex items-end justify-between gap-4'>
                <div>
                    <h3 className='font-serif text-2xl sm:text-3xl'>
                        {category.name}
                    </h3>

                    <p className='mt-2 max-w-xs text-sm leading-6 text-white/85'>
                        {category.description}
                    </p>
                </div>
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#173F35] transition-transform duration-300 group-hover:rotate-45'>
                    <ArrowUpRight size={18} />
                </span>
            </div>
        </div>
    </Link>
  )
}

export default CategoryCard
