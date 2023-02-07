import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ContextProvider } from '../context/index';
import theme from '../styles/theme';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/duxxud/mekawars-mumbai',
  cache: new InMemoryCache(),
});

function MekaWars({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MekaWars</title>
      </Head>

      <ApolloProvider client={client}>
        <Web3ContextProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </Web3ContextProvider>
      </ApolloProvider>
    </>
  );
}

export default MekaWars;
