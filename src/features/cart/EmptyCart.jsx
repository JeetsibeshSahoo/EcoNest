import { ShoppingBag } from "lucide-react"
import Container from "../../components/common/Container"
import Button from "../../components/common/Button"

function EmptyCart() {
  return (
    <main className="bg-white">
      <Container className="flex min-h-[60vh] items-center justify-center py-16">
        <section
          aria-labelledby="empty-cart-title"
          className="w-full max-w-md text-center"
        >
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-[#173F35]"
            aria-hidden="true"
          >
            <ShoppingBag
              size={28}
              aria-hidden="true"
            />
          </div>

          <h1
            id="empty-cart-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-[#173F35]"
          >
            Your cart is empty
          </h1>

          <p className="mt-3 text-base leading-7 text-gray-500">
            Looks like you haven't added anything to your cart yet.
            Explore our products and find something you love.
          </p>

          <Button
            to="/products"
            className="mt-8"
          >
            Continue Shopping
          </Button>
        </section>
      </Container>
    </main>
  )
}

export default EmptyCart
