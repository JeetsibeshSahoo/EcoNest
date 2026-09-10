import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { selectCartSubtotal } from './cartSelectors'
import { clearCart } from './cartSlice';

function CartSummary() {

  const dispatch = useDispatch();

  const subtotal = useSelector(selectCartSubtotal);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <aside className="rounded-2xl bg-gray-50 p-6">
      <h2 className="text-xl font-semibold text-[#173F35]">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Subtotal
          </span>

          <span className="font-medium text-[#173F35]">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Shipping
          </span>

          <span className="font-medium text-[#173F35]">
            Free
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#173F35]">
              Total
            </span>

            <span className="text-xl font-semibold text-[#173F35]">
              ₹{subtotal}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
      >
        Proceed to Checkout
      </button>

      <button 
      type="button" 
      onClick={handleClearCart} 
      className="mt-3 w-full rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2" 
      > 
        Clear Cart 
      </button>
    </aside>
  )
}

export default CartSummary
