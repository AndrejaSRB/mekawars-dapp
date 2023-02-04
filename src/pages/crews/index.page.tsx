import Navigation from "../../components/Navigation";
import SwitchNetwork from "../../components/SwitchNetwork";
import { useWeb3Context } from "../../context";
import { Box, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Crews: NextPage = () => {
  const { address, network } = useWeb3Context();

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {!!address && <Text>Crews</Text>}
    </Box>
  );
};

export default Crews;
