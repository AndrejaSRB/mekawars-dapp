import { FC, useCallback } from 'react';
import { Heading, Grid, Box, Text } from '@chakra-ui/react';
import { User, UserItemAmount } from '../../lib/graphql/types';
import InventoryItem from './InventoryItem';

type ItemAmountSmall = Pick<UserItemAmount, 'item' | 'amount'>;

interface MyInventoryProps {
  items: Pick<User, 'itemAmounts'> | undefined | null;
}
const MyInventory: FC<MyInventoryProps> = ({ items }) => {
  const renderItems = useCallback((item: ItemAmountSmall) => {
    return <InventoryItem key={item?.item?.id} amount={item?.amount} itemId={item?.item?.id} />;
  }, []);

  return (
    <Box mt={4}>
      <Heading>My Inventory:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {items?.itemAmounts && items?.itemAmounts?.length > 0 ? (
          items?.itemAmounts?.map(renderItems)
        ) : (
          <Text>There are no items.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default MyInventory;
