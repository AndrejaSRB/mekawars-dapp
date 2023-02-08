import { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { Match } from '../../../../../lib/graphql/types';
import { SmallMatch } from './Matches';

interface MatchItemProps {
  match: Pick<Match, SmallMatch> | undefined | null;
}

const MatchItem: FC<MatchItemProps> = ({ match }) => {
  console.log('MATCH ITEM', match?.secondCrewWithBucket?.crew?.id);
  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Flex fontSize="sm">Match ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {match?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">Won Crew ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {match?.wonCrewId}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">First Crew ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {match?.firstCrewWithBucket?.crew?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">Second Crew ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {match?.secondCrewWithBucket?.crew?.id}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default MatchItem;
