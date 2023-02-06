import type { FC } from 'react';
import { useCallback, useEffect } from 'react';
import { Heading, Grid, Box, Text, GridItem, Flex } from '@chakra-ui/react';
import { useWeb3Context } from '../../context';
import { useMyCrewsLazyQuery } from '../../lib/graphql/operations/MyCrews.generated';
import type { Crew } from '../../lib/graphql/types';
import CrewItem from './CrewItem';

export type SmallCrew = 'id' | 'mekaLeader' | 'durability' | 'active' | 'rating';

const MyCrews: FC = () => {
  const { address } = useWeb3Context();
  const [getMyCrews, { data: myCrews }] = useMyCrewsLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const renderMyCrews = useCallback(
    (crew: Pick<Crew, SmallCrew> | undefined) => <CrewItem key={crew?.id} crew={crew} />,
    [],
  );

  useEffect(() => {
    if (address) {
      getMyCrews({
        variables: {
          address,
        },
      });
    }
  }, [address, getMyCrews]);

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
        {myCrews?.crews && myCrews?.crews?.length > 0 ? (
          myCrews?.crews?.map(renderMyCrews)
        ) : (
          <Text>There is no any crew.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default MyCrews;
