import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
const API_URL = process.env.NEXT_PUBLIC_API_URL || ""
const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(), 
    ssrMode: true,
    link: new HttpLink({
      uri: API_URL, 
      fetchOptions: { cache: "no-store" },
    }), 
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      }
    }
  });
});

const apolloSSR = getClient();

export default apolloSSR