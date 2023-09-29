"use client";

import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";
import { client } from "../libs/graphql/apollo";

const ApolloWrapper = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
