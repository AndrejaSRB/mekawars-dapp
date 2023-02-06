import type { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import type { UserItemAmount } from '../../lib/graphql/types';

interface InventoryItemProps {
  itemId: string | undefined | null;
  amount: string | undefined | null;
}

const InventoryItem: FC<InventoryItemProps> = ({ itemId, amount }) => (
  <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
    <Flex align="center">
      <Text fontSize="sm">ID:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {itemId}
      </Text>
    </Flex>

    <Flex align="center">
      <Text fontSize="sm">Amount:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {amount}
      </Text>
    </Flex>
  </GridItem>
);

export default InventoryItem;
