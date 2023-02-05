import { Web3Button } from "./Web3Button";
import { Flex, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      maxW={1024}
      m=" 0 auto"
      p="16px 0"
    >
      <Flex>
        <NextLink href="/">
          <Text
            cursor="pointer"
            fontWeight={router.pathname === "/" ? 800 : 300}
          >
            MekaWars
          </Text>
        </NextLink>

        <NextLink href="/mint">
          <Text
            cursor="pointer"
            ml={4}
            fontWeight={router.pathname === "/mint" ? 800 : 300}
          >
            Mint
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
