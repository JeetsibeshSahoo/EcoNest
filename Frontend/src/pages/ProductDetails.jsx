import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import ProductDetailsContent from '../components/products/ProductDetailsContent';

function ProductDetails() {

    const { slug } = useParams();

    const product = products.find((item) => item.slug === slug);

    if(!product) {
        return (
            <section className='flex min-h-[60vh] items-center justify-center px-4'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-[#173F35]'>
                        Product not found
                    </h1>

                    <p className='mt-2 text-gray-500'>
                        The product you're looking for doesn't exist.
                    </p>
                </div>
            </section>
        )
    }

    return <ProductDetailsContent product={product} />
}

export default ProductDetails
