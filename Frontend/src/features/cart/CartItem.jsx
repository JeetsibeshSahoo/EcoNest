import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from './cartSlice';
import { Link } from 'react-router-dom';

function CartItem({ item }) {

    const itemUrl = `/products/${item.slug}`;
    const dispatch = useDispatch();

    const itemTotal = item.price * item.quantity;

  return (
    <article className='flex gap-4 border-b border-gray-200 py-6 sm:gap-6'>
        <Link
        to={itemUrl}
        className="shrink-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
        >
            <img 
            src={item.image}
            alt={item.name}
            className='h-24 w-24 rounded-xl object-cover sm:h-32 sm:w-32'
            />
        </Link>

        <div className='flex min-w-0 flex-1 flex-col justify-between'>
            <div>
                <Link
                to={itemUrl}
                className="font-medium text-[#173F35] transition-colors hover:text-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
                >
                    {item.name}
                </Link>

                <p className='mt-1 text-sm text-gray-500'>
                    ₹{item.price}
                </p>
            </div>

            <div className='mt-4 flex items-center justify-between gap-4'>
                <div className='inline-flex items-center overflow-hidden rounded-full border border-gray-300'>
                    <button 
                    type='button'
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label={`Decrease quantity of ${item.name}`}
                    className='flex h-9 w-9 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35]'>
                        <Minus size={14} aria-hidden="true" />
                    </button>

                    <span className='flex h-9 min-w-10 items-center justify-center border-x border-gray-300 text-sm font-medium text-[#173F35]' aria-live='polite'>
                        {item.quantity}
                    </span>

                    <button
                    type='button'
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label={`Increase quantity of ${item.name}`}
                    className='flex h-9 w-9 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35]'
                    >
                        <Plus size={14} aria-hidden="true" />
                    </button>
                </div>

                <div className='text-right'>
                    <p className='font-semibold text-[#173F35]'>
                        ₹{itemTotal}
                    </p>

                    <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label={`Remove ${item.name} from cart`}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                    <Trash2 size={14} aria-hidden="true" />
                    Remove
                    </button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default CartItem
