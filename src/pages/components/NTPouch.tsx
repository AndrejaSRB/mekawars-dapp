import type { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import type { UserNtPouchAmount } from '../../lib/graphql/types';

interface NTPouchProps {
  ntPouch: UserNtPouchAmount | undefined;
}

const NTPouch: FC<NTPouchProps> = ({ ntPouch }) => (
  <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
    <Flex align="center">
      <Text fontSize="sm">ID:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ntPouch?.ntPouch?.id}
      </Text>
    </Flex>

    <Flex align="center">
      <Text fontSize="sm">Amount:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ntPouch?.amount}
      </Text>
    </Flex>
  </GridItem>
);

export default NTPouch;
