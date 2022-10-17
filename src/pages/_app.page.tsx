import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ContextProvider } from '../context/index';
import theme from '../styles/theme';

function MekaWars({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ContextProvider>
  );
}

export default MekaWars;
