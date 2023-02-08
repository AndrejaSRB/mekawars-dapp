import { FC, useCallback } from 'react';
import { Grid, Heading, Box, Text } from '@chakra-ui/react';
import { Crew, Ooga } from '../../../../../lib/graphql/types';
import StakedRobo from './StakedRobo';

interface StakedRobosProps {
  oogasList: Pick<Crew, 'oogasInCrew'> | undefined | null;
  isLoading: boolean;
}

const StakedRobos: FC<StakedRobosProps> = ({ oogasList, isLoading }) => {
  const renderOogas = useCallback(
    (ooga: Ooga) => <StakedRobo key={ooga.id} id={ooga?.id} oogaType={ooga?.oogaType} oogaLevel={ooga?.level} />,
    [isLoading],
  );

  return (
    <Box mt={4}>
      <Heading>Staked Robos</Heading>

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
        {isLoading ? <Text>Loading...</Text> : oogasList?.oogasInCrew?.map(renderOogas)}
      </Grid>
    </Box>
  );
};

export default StakedRobos;
