import type { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface SwitchNetworkProps {
  chainId: number;
}

const SwitchNetwork: FC<SwitchNetworkProps> = ({ chainId }) => {
  return (
    <>
      {chainId !== 80001 ? (
        <Flex
          justify="center"
          align="center"
          bg="#E17B53"
          py={2}
          px={8}
          color="#121212"
          fontWeight={600}
          borderRadius={8}
          my={4}
          fontSize="sm"
        >
          <Text>
            Your wallet is connected to the {chainId} network. To use MekaWars switch network to Polygon Mumbai.
          </Text>
        </Flex>
      ) : null}
    </>
  );
};

export default SwitchNetwork;
