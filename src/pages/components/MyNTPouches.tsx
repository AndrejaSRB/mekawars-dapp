import { FC, useCallback } from 'react';
import { Heading, Grid, Box, Text } from '@chakra-ui/react';
import { User, UserNtPouchAmount } from '../../lib/graphql/types';
import NTPouch from './NTPouch';

interface MyNTPouchesProps {
  list: Pick<User, 'ntPouchAmounts'> | undefined | null;
}
const MyNTPouches: FC<MyNTPouchesProps> = ({ list }) => {
  const renderNTPouches = useCallback((ntPouch: UserNtPouchAmount) => {
    return <NTPouch key={ntPouch?.ntPouch?.id} ntPouch={ntPouch} />;
  }, []);

  return (
    <Box mt={4}>
      <Heading>My NTPouches:</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {list?.ntPouchAmounts && list?.ntPouchAmounts?.length > 0 ? (
          list?.ntPouchAmounts?.map(renderNTPouches)
        ) : (
          <Text>There are no items.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default MyNTPouches;
