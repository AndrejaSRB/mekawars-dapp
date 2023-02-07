import type { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ConnectYourWallet: FC = () => (
  <Flex
    justify="center"
    align="center"
    bg="orange.300"
    py={2}
    px={8}
    color="primaryBlack.100"
    fontWeight={600}
    borderRadius={8}
    my={4}
    fontSize="sm"
  >
    <Text>Connect your wallet.</Text>
  </Flex>
);

export default ConnectYourWallet;
