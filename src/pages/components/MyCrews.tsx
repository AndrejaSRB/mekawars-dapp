import type { FC } from 'react';
import { useCallback } from 'react';
import { Heading, Grid, Box, Text } from '@chakra-ui/react';
import type { Crew } from '../../lib/graphql/types';
import CrewItem from './CrewItem';

export type SmallCrew = 'id' | 'mekaLeader' | 'durability' | 'active' | 'rating';

interface MyCrewsProps {
  myCrews: Pick<Crew, SmallCrew>[] | undefined | null;
}

const MyCrews: FC<MyCrewsProps> = ({ myCrews }) => {
  const renderMyCrews = useCallback(
    (crew: Pick<Crew, SmallCrew> | undefined) => <CrewItem key={crew?.id} crew={crew} />,
    [],
  );

  return (
    <Box mt={4}>
      <Heading>My Crews:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {myCrews && myCrews?.length > 0 ? myCrews?.map(renderMyCrews) : <Text>There is no any crew.</Text>}
      </Grid>
    </Box>
  );
};

export default MyCrews;
