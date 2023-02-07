import type { FC } from 'react';
import { useCallback } from 'react';
import { Heading, Grid, Box } from '@chakra-ui/react';
import { useWeb3Context } from '../../context';
import { useGetMyOogasQuery } from '../../lib/graphql/operations/GetMyOoga.generated';
import type { Ooga } from '../../lib/graphql/types';
import { RefetchMyCrew } from '../index.page';
import MekaApeItem from './MekaApeItem';

interface MyMekaApesProps {
  refetchMyCrew: RefetchMyCrew;
}

const MyMekaApes: FC<MyMekaApesProps> = ({ refetchMyCrew }) => {
  const { address } = useWeb3Context();

  const { data: myOogas, refetch: refetchMyOogas } = useGetMyOogasQuery({
    fetchPolicy: 'no-cache',
    skip: !address,
    variables: {
      address: address as string,
    },
  });

  const renderMyOogas = useCallback((ooga: Ooga) => {
    if (ooga?.oogaType === 3 && !ooga?.inCrew) {
      return <MekaApeItem ooga={ooga} key={ooga?.id} refetchMyCrew={refetchMyCrew} refetchMyOogas={refetchMyOogas} />;
    } else {
      return null;
    }
  }, []);

  return (
    <Box mt={4}>
      <Heading>My MekaApes Without Crew:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {myOogas?.oogas?.map(renderMyOogas)}
      </Grid>
    </Box>
  );
};

export default MyMekaApes;
