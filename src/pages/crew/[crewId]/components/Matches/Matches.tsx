import { FC, useMemo } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { Match } from '../../../../../lib/graphql/types';
import MatchItem from './MatchItem';

export type SmallMatch = 'id' | 'firstCrewWithBucket' | 'secondCrewWithBucket' | 'wonCrewId';

interface MatchesProps {
  myMatches: Pick<Match, SmallMatch>[] | undefined | null;
  loading: boolean;
}

const Matches: FC<MatchesProps> = ({ myMatches, loading }) => {
  const renderMatches = (match: Match) => <MatchItem key={match?.id} match={match} />;

  return (
    <Box mt={4}>
      <Heading>Matches</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        {loading ? (
          <Text>Loading Matches...</Text>
        ) : myMatches && myMatches?.length > 0 ? (
          myMatches?.map(renderMatches)
        ) : (
          <Text>There are no matches.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default Matches;
