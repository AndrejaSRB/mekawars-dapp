import { Flex, Box } from '@chakra-ui/react';
import { Web3Button } from './Web3Button';

const Navigation = () => {
  return (
    <Flex w="100%" justify="space-between" align="center" maxW={1024} m=" 0 auto" p="16px 0">
      <Box>LOGO</Box>
      <Box>
        <Web3Button />
      </Box>
    </Flex>
  );
};

export default Navigation;
