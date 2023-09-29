import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'

const RelatestProducts = ({ data }: any) => {
    const { products } = data;
    return (
        <div>
            <div>
                <h2 className='h2 mb-6 text-center xl:text-left'>Relatest Products</h2>
                <ProductSlider products={products} />
            </div>
        </div>
    )
}

export default RelatestProducts
