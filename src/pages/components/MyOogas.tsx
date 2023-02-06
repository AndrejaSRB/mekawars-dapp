import { FC, useCallback } from 'react';
import { Heading, Grid, Box } from '@chakra-ui/react';
import { Ooga, User } from '../../lib/graphql/types';
import OogaItem from './OogaItem';

interface MyOogasProps {
  oogas: Pick<User, 'notStakedOogas'> | undefined | null;
}
const MyOogas: FC<MyOogasProps> = ({ oogas }) => {
  const renderMyOogas = useCallback((ooga: Ooga) => {
    return <OogaItem key={ooga?.id} ooga={ooga} />;
  }, []);

  return (
    <Box mt={4}>
      <Heading>My Oogas:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {oogas?.notStakedOogas?.map(renderMyOogas)}
      </Grid>
    </Box>
  );
};

export default MyOogas;
