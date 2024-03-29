import CategoryNav from '@/components/CategoryNav/CategoryNav'
import Product from '@/components/Product/Product'
import React from 'react'

const ProductsScreen = ({ data }: any) => {
  const { products } = data

  return (
    <div className='mb-[30px] pt-40  lg:pt-4 xl:pt-0'>
      <div className='container mx-auto'>
        <div className='flex gap-x-[30px]'>
          <CategoryNav />
          <main>
            {/* title */}
            <div className='py-3 text-xl uppercase text-center lg:text-left'>title</div>
            {/* product */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {
                products?.data?.map((product: any) => {
                  return (
                    <Product
                      price={product.price}
                      product_name={product.product_name}
                      image={product.image}
                      description={product.description}
                    />
                  )
                })
              }
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductsScreen
