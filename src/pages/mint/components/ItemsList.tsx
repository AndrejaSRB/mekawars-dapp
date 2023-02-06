import type { FC } from 'react';
import { useCallback } from 'react';
import { GridItem, Flex, Text, Heading, Grid, Box } from '@chakra-ui/react';
import type { Item } from '../../../lib/graphql/types';
import SingleItem from './SingleItem';

interface ItemsListProps {
  items: Item[] | undefined;
}
const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const renderItems = useCallback((item: Item) => <SingleItem key={item?.id} item={item} />, []);

  return (
    <Box mt={8}>
      <Heading mt={4}>Items List</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {items?.map(renderItems)}
      </Grid>
    </Box>
  );
};

export default ItemsList;
