import { NextPage } from 'next';
import { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import ConnectYourWallet from '../components/ConnectYourWallet';
import Navigation from '../components/Navigation';
import SwitchNetwork from '../components/SwitchNetwork';
import { useWeb3Context } from '../context';
import { useGetUserLazyQuery } from '../lib/graphql/operations/GetUser.generated';
import MyCrews from './components/MyCrews';
import MyInventory from './components/MyInventory';
import MyMekaApes from './components/MyMekaApes';
import MyNTPouches from './components/MyNTPouches';
import MyOogas from './components/MyOogas';

const Home: NextPage = () => {
  const { address, network } = useWeb3Context();

  const [getUserData, { data: userData }] = useGetUserLazyQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (address) {
      void getUserData({
        variables: {
          address,
        },
      });
    }
  }, [address, getUserData]);

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {address && <Text>Address: {address}</Text>}

      {address ? (
        <>
          <MyCrews />

          <MyMekaApes />

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
