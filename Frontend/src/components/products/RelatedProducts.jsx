import Container from "../common/Container"
import ProductCard from "./ProductCard"

function RelatedProducts({ products }) {
  if (!products.length) {
    return null
  }

  return (
    <section
      aria-labelledby="related-products-title"
      className="border-t border-gray-200 bg-[#F7F6F1] py-16 sm:py-20"
    >
      <Container>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]">
            You may also like
          </p>

          <h2
            id="related-products-title"
            className="mt-3 font-serif text-3xl leading-tight text-[#17201D] sm:text-4xl"
          >
            More from EcoNest
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Discover more thoughtfully selected products from our
            collection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default RelatedProducts