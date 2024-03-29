import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'

const LatestProducts = ({ products }: any) => {
  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
      </div>
      <ProductSlider products={products}/>
    </div>
  )
}

export default LatestProducts
