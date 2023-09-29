import apolloSSR from '@/libs/graphql/apolloSSR';
import HomeScreen from '@/screen/Home/HomeScreen'
import { PRODUCTS_QUERY } from '@/components/Product/graphql/query';
async function getData() {
  const res = await apolloSSR.query({ query: PRODUCTS_QUERY });
  return res;
}
export default async function Home() {
  const { data } = await getData();
  
  return (
    <>
      <HomeScreen data={data} />
    </>
  )
}
