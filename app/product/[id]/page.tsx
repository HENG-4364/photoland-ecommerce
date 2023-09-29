import { PRODUCTS_QUERY } from '@/components/Product/graphql/query';
import apolloSSR from '@/libs/graphql/apolloSSR';
import ProductDetailScreen from '@/screen/ProductDetail/ProductDetailScreen'
import React from 'react'
async function getData() {
    const res = await apolloSSR.query({ query: PRODUCTS_QUERY });
    return res;
}
const ProductDetail = async () => {
    const { data } = await getData();
    return (

        <ProductDetailScreen data={data} />

    )
}

export default ProductDetail
