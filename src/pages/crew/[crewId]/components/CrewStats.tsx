import { FC } from 'react';
import { Flex, Grid, Text, GridItem, Heading, Box } from '@chakra-ui/react';
import { Crew } from '../../../../lib/graphql/types';

type ImportantCrewStats = 'rating' | 'level' | 'mekaLeader' | 'durability' | 'ntAmount';

interface CrewStatsProps {
  crewStats: Pick<Crew, ImportantCrewStats> | undefined | null;
}

const CrewStats: FC<CrewStatsProps> = ({ crewStats }) => {
  return (
    <Box mt={4}>
      <Heading>Crew Stats</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(5, 1fr)',
        }}
        borderColor="gray.500"
        borderWidth="1px"
        borderRadius={8}
        p={3}
      >
        <GridItem as={Flex}>
          <Flex fontSize="sm">Meka Leader ID:</Flex>
          <Text ml={1} fontWeight={800} fontSize="sm">
            {crewStats?.mekaLeader?.id ?? 0}
          </Text>
        </GridItem>

        <GridItem as={Flex}>
          <Flex fontSize="sm">NTamount:</Flex>
          <Text ml={1} fontWeight={800} fontSize="sm">
            {crewStats?.ntAmount ?? 0}
          </Text>
        </GridItem>

        <GridItem as={Flex}>
          <Flex fontSize="sm">Rating:</Flex>
          <Text ml={1} fontWeight={800} fontSize="sm">
            {crewStats?.rating ?? 0}
          </Text>
        </GridItem>

        <GridItem as={Flex}>
          <Flex fontSize="sm">Level:</Flex>
          <Text ml={1} fontWeight={800} fontSize="sm">
            {crewStats?.level ?? 0}
          </Text>
        </GridItem>

        <GridItem as={Flex}>
          <Flex fontSize="sm">Durability:</Flex>
          <Text ml={1} fontWeight={800} fontSize="sm">
            {crewStats?.durability ?? 0}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CrewStats;
