import { NextPage } from 'next';
import { ApolloQueryResult } from '@apollo/client';
import { Box, Text } from '@chakra-ui/react';
import ConnectYourWallet from '../components/ConnectYourWallet';
import Navigation from '../components/Navigation';
import SwitchNetwork from '../components/SwitchNetwork';
import { useWeb3Context } from '../context';
import { useGetUserQuery } from '../lib/graphql/operations/GetUser.generated';
import { MyCrewsQuery, useMyCrewsQuery } from '../lib/graphql/operations/MyCrews.generated';
import { Exact } from '../lib/graphql/types';
import MyCrews from './components/MyCrews';
import MyInventory from './components/MyInventory';
import MyMekaApes from './components/MyMekaApes';
import MyNTPouches from './components/MyNTPouches';
import MyOogas from './components/MyOogas';

export type RefetchMyCrew = (
  variables?:
    | Partial<
        Exact<{
          address: string;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<MyCrewsQuery>>;

const Home: NextPage = () => {
  const { address, network } = useWeb3Context();

  const { data: userData } = useGetUserQuery({
    fetchPolicy: 'no-cache',
    skip: !address,
    variables: {
      address: address as string,
    },
  });

  const { data: myCrews, refetch: refetchMyCrew } = useMyCrewsQuery({
    fetchPolicy: 'no-cache',
    skip: !address,
    variables: {
      address: address as string,
    },
  });

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {address && <Text>Address: {address}</Text>}

      {address ? (
        <>
          <MyCrews myCrews={myCrews?.crews} />

          <MyMekaApes refetchMyCrew={refetchMyCrew} />

          <MyOogas oogas={userData?.user} />

          <MyInventory items={userData?.user} />

          <MyNTPouches list={userData?.user} />
        </>
      ) : (
        <ConnectYourWallet />
      )}
    </Box>
  );
};

export default Home;
