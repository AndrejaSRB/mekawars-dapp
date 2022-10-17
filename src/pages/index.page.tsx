import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import Navigation from '../components/Navigation';
import { useWeb3Context } from '../context';

const Home: NextPage = () => {
  const { address } = useWeb3Context();

  return (
    <Box maxW={1024} m="0 auto">
      <Navigation />
      {address && <Text>Address: {address}</Text>}
    </Box>
  );
};

export default Home;
