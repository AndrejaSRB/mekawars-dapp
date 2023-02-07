import { FC, useCallback, useMemo } from 'react';
import { Grid, Heading, Box, Text, GridItem } from '@chakra-ui/react';
import { Crew, Ooga } from '../../../../../lib/graphql/types';
import { RefetchCrew } from '../../index.page';
import BoxSlot from './BoxSlot';

const BoxSlots: FC = () => {
  return (
    <Box mt={4}>
      <Heading>Box Slots</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(5, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        <BoxSlot />
        <BoxSlot />
        <BoxSlot />
      </Grid>
    </Box>
  );
};

export default BoxSlots;
