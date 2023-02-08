import { FC, useCallback } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { BoxSlot, Crew } from '../../../../../lib/graphql/types';
import { RefetchCrew } from '../../index.page';
import BoxSlotItem from './BoxSlotItem';

interface BoxSlotsProps {
  refetch: RefetchCrew;
  isLoading: boolean;
  crewId: string | undefined;
  crew: Pick<Crew, 'boxSlots'> | undefined | null;
}

const BoxSlots: FC<BoxSlotsProps> = ({ crew, crewId, refetch, isLoading }) => {
  const renderBoxSlots = useCallback(
    (boxSlot: BoxSlot) => <BoxSlotItem key={boxSlot?.id} boxSlot={boxSlot} crewId={crewId} refetch={refetch} />,
    [isLoading],
  );

  return (
    <Box mt={4}>
      <Heading>Box Slots</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        {isLoading ? (
          <Text>Loading Box Slots...</Text>
        ) : crew && crew?.boxSlots && crew?.boxSlots?.length > 0 ? (
          crew?.boxSlots?.map(renderBoxSlots)
        ) : (
          <Text>There are no box slots.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default BoxSlots;
