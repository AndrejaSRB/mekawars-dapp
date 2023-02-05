import Navigation from "../components/Navigation";
import SwitchNetwork from "../components/SwitchNetwork";
import { useWeb3Context } from "../context";
import ConnectYourWallet from "./components/ConnectYourWallet";
import MyCrews from "./components/MyCrews";
import MyOogas from "./components/MyOogas";
import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { address, network } = useWeb3Context();

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {address && <Text>Address: {address}</Text>}

      {address ? (
        <>
          <MyCrews />

          <MyOogas />
        </>
      ) : (
        <ConnectYourWallet />
      )}
    </Box>
  );
};

export default Home;
