import { useSelector } from "react-redux"
import Container from "../components/common/Container"
import CartItem from "../features/cart/CartItem"
import CartSummary from "../features/cart/CartSummary"
import EmptyCart from "../features/cart/EmptyCart"
import { selectCartItems, selectIsCartEmpty } from "../features/cart/cartSelectors"

function Cart() {
  const cartItems = useSelector(selectCartItems);

  const isCartEmpty = useSelector(selectIsCartEmpty);

  
  if (isCartEmpty) {
    return <EmptyCart />
  }

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Shopping Cart
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#173F35] sm:text-5xl">
            Your Cart
          </h1>

          <p className="mt-3 text-gray-600">
            Review your selected products before continuing.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <section>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </section>

          <CartSummary />
        </div>
      </Container>
    </main>
  )
}

export default Cart