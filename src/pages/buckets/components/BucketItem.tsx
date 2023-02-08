import { format } from 'date-fns';
import { FC, useCallback, useMemo } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { Bucket, CrewInBucket } from '../../../lib/graphql/types';
import { convertSecondsToMinutes } from '../../../utils/convertSecondsToMinutes';

interface BucketProps {
  bucket: Pick<Bucket, 'id' | 'crewInBuckets' | 'state' | 'createdAt'> | undefined | null;
}

const BucketStates: Record<number, string> = {
  0: 'Open',
  1: 'VRF Requested',
  2: 'VRF Received',
};

const BucketItem: FC<BucketProps> = ({ bucket }) => {
  const date = useMemo(
    () => (bucket && bucket?.createdAt ? new Date(convertSecondsToMinutes(+bucket.createdAt)) : null),
    [bucket],
  );

  const renderCrewIds = useCallback(
    (crewInBucket: CrewInBucket) => (
      <Text fontSize="sm" key={`${bucket?.id}_bucketCrew-${crewInBucket?.id}`} as="span">
        {crewInBucket?.crew?.id},
      </Text>
    ),
    [],
  );

  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Flex fontSize="sm">ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {bucket?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">State:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {bucket && bucket?.state !== null && bucket?.state !== undefined && BucketStates[bucket.state]}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">Crew Ids:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          [{bucket && bucket?.crewInBuckets && bucket?.crewInBuckets?.map(renderCrewIds)}]
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">Created:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {date && format(new Date(date), 'dd-MM-yyyy')}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default BucketItem;
