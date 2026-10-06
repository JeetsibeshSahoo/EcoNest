import { Link, useParams } from "react-router-dom"
import Container from "../components/common/Container"
import Button from "../components/common/Button"
import ProductDetailsContent from "../components/products/ProductDetailsContent"
import { products } from "../data/products"
import useDocumentTitle from "../hooks/useDocumentTitle"

function ProductDetails() {
  const { slug } = useParams()

  const product = products.find(
    (item) => item.slug === slug
  )

  const pageTitle = product
    ? `${product.name} | EcoNest`
    : "Product Not Found | EcoNest"

  useDocumentTitle(pageTitle)

  if (!product) {
    return (
      <main aria-label="Product unavailable" className="bg-white">
        <Container className="flex min-h-[60vh] items-center justify-center py-16">
          <section
            aria-labelledby="product-not-found-title"
            className="max-w-md text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Product unavailable
            </p>

            <h1
              id="product-not-found-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-[#173F35] sm:text-4xl"
            >
              Product not found
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              The product you're looking for doesn't exist or may
              have been removed from our collection.
            </p>

            <Button to="/products" className="mt-8">
              Back to Products
            </Button>
          </section>
        </Container>
      </main>
    )
  }

  return (
    <ProductDetailsContent
      key={product.id}
      product={product}
    />
  )
}

export default ProductDetails