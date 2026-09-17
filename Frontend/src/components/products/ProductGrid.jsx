import ProductCard from './ProductCard'

function ProductGrid({ products }) {

  if(!products.length) {
    return (
      <div className='flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center'>
        <div>
          <h2 className='text-lg font-semibold text-[#173F35]'>
            No products found
          </h2>

          <p className='mt-2 max-w-md text-sm leading-6 text-gray-500'>
            We couldn't find any products in this category. Try selecting a different category.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
      {products.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
