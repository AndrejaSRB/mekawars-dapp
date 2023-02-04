import Navigation from "../components/Navigation";
import SwitchNetwork from "../components/SwitchNetwork";
import { Web3ContextProvider } from "../context/index";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

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
