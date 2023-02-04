import { Web3Button } from "./Web3Button";
import { Flex, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      maxW={1024}
      m=" 0 auto"
      p="16px 0">
      <Flex>
        <NextLink href="/">
          <Text cursor="pointer">MekaWars Alpha</Text>
        </NextLink>

        <NextLink href="/crews">
          <Text cursor="pointer" ml={4}>
            Crews
          </Text>
        </NextLink>
      </Flex>

      <Box>
        <Web3Button />
      </Box>
    </Flex>
  );
};

export default Navigation;
