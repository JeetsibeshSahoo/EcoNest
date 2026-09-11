import { useSelector } from "react-redux"

import Container from "../components/common/Container"
import CartItem from "../features/cart/CartItem"
import CartSummary from "../features/cart/CartSummary"
import EmptyCart from "../features/cart/EmptyCart"

import {
  selectCartItems,
  selectCartItemCount,
  selectIsCartEmpty,
} from "../features/cart/cartSelectors"

function Cart() {
  const cartItems = useSelector(selectCartItems)
  const cartItemCount = useSelector(selectCartItemCount)
  const isCartEmpty = useSelector(selectIsCartEmpty)

  if (isCartEmpty) {
    return <EmptyCart />
  }

  return (
    <main className="bg-white py-10 sm:py-14 lg:py-16">
      <Container>
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Shopping Cart
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#173F35] sm:text-5xl">
                Your Cart
              </h1>

              <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
                Review your selected products before continuing to checkout.
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">
              {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-12">
          <section
            aria-labelledby="cart-items-heading"
            className="rounded-2xl border border-gray-200 bg-white"
          >
            <div className="border-b border-gray-200 px-5 py-4 sm:px-6">
              <h2
                id="cart-items-heading"
                className="text-base font-semibold text-[#173F35]"
              >
                Cart Items
              </h2>
            </div>

            <div className="px-5 sm:px-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </section>

          <div className="lg:sticky lg:top-6">
            <CartSummary />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Cart