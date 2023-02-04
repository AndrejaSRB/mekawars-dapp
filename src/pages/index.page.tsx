import MintItem from "../components/MintItem";
import MintNTPouch from "../components/MintNTPouch";
import MintOoga from "../components/MintOoga";
import Navigation from "../components/Navigation";
import SwitchNetwork from "../components/SwitchNetwork";
import { useWeb3Context } from "../context";
import { Box, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { address, network } = useWeb3Context();

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {address && <Text>Address: {address}</Text>}

      {!!address && (
        <>
          <Grid
            gap={4}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}>
            <MintOoga />
            <MintItem />
            <MintNTPouch />
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Home;
