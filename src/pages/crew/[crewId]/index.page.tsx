import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ApolloQueryResult } from '@apollo/client';
import { Box, Grid, Text } from '@chakra-ui/react';
import ConnectYourWallet from '../../../components/ConnectYourWallet';
import Navigation from '../../../components/Navigation';
import { useWeb3Context } from '../../../context';
import { GetMyCrewQuery, useGetMyCrewQuery } from '../../../lib/graphql/operations/GetCrew.generated';
import { Exact } from '../../../lib/graphql/types';
import flatten from '../../../utils/flatten';
import AddItemToInventory from './components/AddItemToInventory';
import BuyMysteryBox from './components/BuyBox';
import CrewInvetory from './components/CrewInvetory/CrewInvetory';
import CrewStats from './components/CrewStats';
import FirstTeam from './components/FirstTeam/FirstTeam';
import JoinToMatchMakingQueue from './components/JoinToMatchMakingQueue';
import StakeBabyOoga from './components/StakeBabyOoga';
import StakeRoboOogas from './components/StakeRoboOogas';
import StakedRobos from './components/StakedRobos/StakedRobos';
import UnstakeBabyOoga from './components/UnstakeBabyOoga';
import UnstakeRoboOogas from './components/UnstakeRoboOogas';

export type RefetchCrew = (
  variables?: Partial<Exact<{ crewId: string }>> | undefined,
) => Promise<ApolloQueryResult<GetMyCrewQuery>>;

const CrewPage: NextPage = () => {
  const { address } = useWeb3Context();
  const router = useRouter();
  const crewId = flatten(router.query.crewId);

  const { data, refetch, loading } = useGetMyCrewQuery({
    skip: !crewId,
    variables: {
      crewId: crewId as string,
    },
  });

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {address ? (
        <>
          <Text>Crew ID: {crewId}</Text>

          <JoinToMatchMakingQueue crewId={crewId} />

          <CrewStats crewStats={data?.crew} />

          <FirstTeam firstTeamList={data?.crew} refetch={refetch} crewId={crewId} isLoading={loading} />

          <StakedRobos oogasList={data?.crew} isLoading={loading} />

          <CrewInvetory inventoryList={data?.crew} isLoading={loading} />

          <Grid
            gap={4}
            mt={4}
            pb="120px"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <StakeRoboOogas crewId={crewId} refetch={refetch} />

            <UnstakeRoboOogas crewId={crewId} refetch={refetch} />

            <AddItemToInventory crewId={crewId} refetch={refetch} />

            <BuyMysteryBox crewId={crewId} refetch={refetch} />

            <StakeBabyOoga crewId={crewId} refetch={refetch} />

            <UnstakeBabyOoga crewId={crewId} refetch={refetch} />
          </Grid>
        </>
      ) : (
        <ConnectYourWallet />
      )}
    </Box>
  );
};

export default CrewPage;
