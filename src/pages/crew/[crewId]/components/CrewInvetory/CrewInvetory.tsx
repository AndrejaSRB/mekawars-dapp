import { FC, useCallback } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { Crew, InventoryItem } from '../../../../../lib/graphql/types';
import { RefetchCrew } from '../../index.page';
import SingleInventoryItem from './SingleInventoryItem';

interface CrewInvetoryProps {
  crew: Pick<Crew, 'inventory'> | undefined | null;
  isLoading: boolean;
  sortedCrewsIds: string[] | undefined;
  refetch: RefetchCrew;
  crewId: string | undefined;
}

const CrewInvetory: FC<CrewInvetoryProps> = ({ crew, isLoading, sortedCrewsIds, refetch, crewId }) => {
  const renderItem = useCallback(
    (item: InventoryItem) => (
      <SingleInventoryItem
        key={item.id}
        item={item}
        sortedCrewsIds={sortedCrewsIds}
        crewId={crewId}
        refetch={refetch}
      />
    ),
    [],
  );

  return (
    <Box mt={4}>
      <Heading>Crew Invetory</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : crew?.inventory && crew?.inventory?.length > 0 ? (
          crew?.inventory?.map(renderItem)
        ) : (
          <Text>There are no items.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default CrewInvetory;
