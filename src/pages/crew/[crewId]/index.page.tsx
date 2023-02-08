import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { ApolloQueryResult } from '@apollo/client';
import { Box, Grid, Text } from '@chakra-ui/react';
import ConnectYourWallet from '../../../components/ConnectYourWallet';
import Navigation from '../../../components/Navigation';
import { useWeb3Context } from '../../../context';
import { GetMyCrewQuery, useGetMyCrewQuery } from '../../../lib/graphql/operations/GetCrew.generated';
import { GetMatchesQuery, useGetMatchesQuery } from '../../../lib/graphql/operations/GetMatches.generated';
import { Exact, Match, Ooga } from '../../../lib/graphql/types';
import flatten from '../../../utils/flatten';
import AddItemToInventory from './components/AddItemToInventory';
import BoxSlots from './components/BoxSlots/BoxSlots';
import BuyMysteryBox from './components/BuyBox';
import CrewInvetory from './components/CrewInvetory/CrewInvetory';
import CrewStats from './components/CrewStats';
import DepositNTPouch from './components/DepositNTPouch';
import FirstTeam from './components/FirstTeam/FirstTeam';
import JoinToMatchMakingQueue from './components/JoinToMatchMakingQueue';
import Matches from './components/Matches/Matches';
import StakeRoboOogas from './components/StakeRoboOogas';
import StakedRobos from './components/StakedRobos/StakedRobos';
import UnstakeRoboOogas from './components/UnstakeRoboOogas';
import WithdrawNTPouch from './components/WithdrawNTPouch';

export type RefetchCrew = (
  variables?: Partial<Exact<{ crewId: string }>> | undefined,
) => Promise<ApolloQueryResult<GetMyCrewQuery>>;

export type RefetchMatches = (
  variables?:
    | Partial<
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<GetMatchesQuery>>;

const CrewPage: NextPage = () => {
  const { address } = useWeb3Context();
  const router = useRouter();
  const crewId = flatten(router.query.crewId);

  const { data, refetch, loading } = useGetMyCrewQuery({
    fetchPolicy: 'no-cache',
    skip: !crewId,
    variables: {
      crewId: crewId as string,
    },
  });

  const {
    data: matchesData,
    refetch: refetchMatches,
    loading: isLoadingMatches,
  } = useGetMatchesQuery({
    fetchPolicy: 'no-cache',
    skip: !crewId,
  });

  // Order First Team Oogas by orderIndexInFirstTeam
  const sortedCrews = useMemo(() => {
    if (data?.crew?.firstTeam && data?.crew?.firstTeam?.length > 0) {
      let unorderedFirstTeamList = [...data?.crew?.firstTeam];

      return unorderedFirstTeamList.sort(
        (a: Ooga, b: Ooga) => (a.orderIndexInFirstTeam as number) - (b.orderIndexInFirstTeam as number),
      );
    } else {
      return [];
    }
  }, [data?.crew?.firstTeam]);

  // Filter all matches and get only matches where the current crew was part
  const myMatches = useMemo((): Match[] | undefined => {
    if (matchesData?.matches && matchesData?.matches?.length > 0 && crewId) {
      let allMyMatches = matchesData?.matches.filter((match) => {
        if (match?.firstCrewWithBucket?.crew?.id === crewId || match?.secondCrewWithBucket?.crew?.id === crewId) {
          return match;
        }
      });
      return allMyMatches as Match[];
    } else {
      return;
    }
  }, [matchesData, crewId]);

  const sortedCrewsIds = useMemo(() => sortedCrews && sortedCrews?.map((crew) => crew.id), [sortedCrews]);

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {address ? (
        <>
          <Text>Crew ID: {crewId}</Text>

          <JoinToMatchMakingQueue crewId={crewId} crew={data?.crew} refetch={refetch} refetchMatches={refetchMatches} />

          <CrewStats crewStats={data?.crew} />

          <FirstTeam sortedCrews={sortedCrews} refetch={refetch} crewId={crewId} isLoading={loading} />

          <StakedRobos oogasList={data?.crew} isLoading={loading} />

          <BoxSlots crew={data?.crew} refetch={refetch} isLoading={loading} crewId={crewId} />

          <CrewInvetory
            crew={data?.crew}
            isLoading={loading}
            sortedCrewsIds={sortedCrewsIds}
            refetch={refetch}
            crewId={crewId}
          />

          <Matches myMatches={myMatches} loading={isLoadingMatches} />

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

            <DepositNTPouch crewId={crewId} refetch={refetch} />

            <WithdrawNTPouch crewId={crewId} refetch={refetch} />
          </Grid>
        </>
      ) : (
        <ConnectYourWallet />
      )}
    </Box>
  );
};

export default CrewPage;
