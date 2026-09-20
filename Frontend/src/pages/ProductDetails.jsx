import { Link, useParams } from "react-router-dom"
import Container from "../components/common/Container"
import ProductDetailsContent from "../components/products/ProductDetailsContent"
import { products } from "../data/products"

function ProductDetails() {
  const { slug } = useParams()

  const product = products.find(
    (item) => item.slug === slug
  )

  if (!product) {
    return (
      <main className="bg-white">
        <Container className="flex min-h-[60vh] items-center justify-center py-16">
          <div className="max-w-md text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Product unavailable
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#173F35] sm:text-4xl">
              Product not found
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              The product you're looking for doesn't exist or may
              have been removed from our collection.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
            >
              Back to Products
            </Link>
          </div>
        </Container>
      </main>
    )
  }

  return <ProductDetailsContent product={product} />
}

export default ProductDetails
