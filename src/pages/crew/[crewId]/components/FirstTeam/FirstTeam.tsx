import { FC, useCallback, useMemo } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { Crew, Ooga } from '../../../../../lib/graphql/types';
import { RefetchCrew } from '../../index.page';
import EditFirstTeam from './EditFirstTeam';
import TeamItem from './TeamItem';

interface FirstTeamProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
  isLoading: boolean;
  sortedCrews: Ooga[] | undefined | null;
}

const FirstTeam: FC<FirstTeamProps> = ({ sortedCrews, crewId, refetch, isLoading }) => {
  const renderOogas = useCallback(
    (ooga: Ooga) => <TeamItem key={ooga.id} id={ooga?.id} oogaType={ooga?.oogaType} />,
    [],
  );

  return (
    <Box mt={4}>
      <Heading>First Team</Heading>

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
        {isLoading ? <Text>Loading...</Text> : sortedCrews?.map(renderOogas)}
      </Grid>

      <EditFirstTeam refetch={refetch} crewId={crewId} />
    </Box>
  );
};

export default FirstTeam;
