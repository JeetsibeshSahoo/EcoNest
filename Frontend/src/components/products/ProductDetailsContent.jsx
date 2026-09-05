import { useState } from "react"
import Container from "../common/Container"
import { Link } from "react-router-dom"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function ProductDetailsContent({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  }

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        quantity,
      })
    )
  }

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
              <p className="mb-3 text-sm font-medium text-gray-700">
                Quantity
              </p>

              <div className="inline-flex items-center overflow-hidden rounded-full border border-gray-300">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35]"
                >
                  <Minus size={16} aria-hidden="true" />
                </button>

                <span
                  className="flex h-11 min-w-12 items-center justify-center border-x border-gray-300 text-sm font-medium text-[#173F35]"
                  aria-live="polite"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35]"
                >
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleAddToCart}
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