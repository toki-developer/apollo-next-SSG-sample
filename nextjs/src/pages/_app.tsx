import "/src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useApollo } from "src/apollo/apolloClient";

const App = (props: AppProps) => {
  const apolloClient = useApollo(props.pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <props.Component {...props.pageProps} />
    </ApolloProvider>
  );
};

export default App;
