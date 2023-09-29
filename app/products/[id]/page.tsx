import { PRODUCTS_QUERY } from '@/components/Product/graphql/query';
import apolloSSR from '@/libs/graphql/apolloSSR';
import ProductsScreen from '@/screen/Products/ProductsScreen'
import React from 'react'
async function getData() {
  const res = await apolloSSR.query({ query: PRODUCTS_QUERY });
  return res;
}
const Products = async () => {
  const { data } = await getData();
  return (

    <ProductsScreen data={data} />

  )
}

export default Products
