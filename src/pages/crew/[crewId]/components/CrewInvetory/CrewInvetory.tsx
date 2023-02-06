import { FC, useCallback } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { Crew, InventoryItem } from '../../../../../lib/graphql/types';
import SingleInventoryItem from './SingleInventoryItem';

interface CrewInvetoryProps {
  inventoryList: Pick<Crew, 'inventory'> | undefined | null;
  isLoading: boolean;
}

const CrewInvetory: FC<CrewInvetoryProps> = ({ inventoryList, isLoading }) => {
  const renderItem = useCallback((item: InventoryItem) => <SingleInventoryItem key={item.id} item={item} />, []);

  return (
    <Box mt={4}>
      <Heading>Crew Invetory</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : inventoryList?.inventory && inventoryList?.inventory?.length > 0 ? (
          inventoryList?.inventory?.map(renderItem)
        ) : (
          <Text>There are no items.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default CrewInvetory;
