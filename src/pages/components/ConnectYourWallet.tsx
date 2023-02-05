import { Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";

const ConnectYourWallet: FC = () => (
  <Flex
    justify="center"
    align="center"
    bg="orange.300"
    py={2}
    px={8}
    color="#121212"
    fontWeight={600}
    borderRadius={8}
    my={4}
    fontSize="sm">
    <Text>Connect your wallet.</Text>
  </Flex>
);

export default ConnectYourWallet;
