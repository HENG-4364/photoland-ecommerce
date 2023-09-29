import Hero from '@/components/Hero/Hero'
import LatestProducts from '@/components/LatestProducts/LatestProducts'
import Product from '@/components/Product/Product'
import React from 'react'
type IHomeScreenProps = {
  data: any;
};

const HomeScreen = ({ data }: IHomeScreenProps) => {
  const { products } = data;


  return (
    <section>
      <Hero />
      <LatestProducts products={products} />

      <div className='mb-16 container mx-auto'>
        <div className='container mx-auto'>
          <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px] md:gap-[30px]'>
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
      </div>


    </section>
  )
}

export default HomeScreen
