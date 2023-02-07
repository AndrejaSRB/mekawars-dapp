import { FC, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useMatchMakingContract from '../../../../lib/contracts/useMatchMakingContract';
import { Crew } from '../../../../lib/graphql/types';

interface JoinToMatchMakingQueueProps {
  crewId: string | undefined;
  crew: Pick<Crew, 'currentlyInBucket'> | undefined | null;
}

const JoinToMatchMakingQueue: FC<JoinToMatchMakingQueueProps> = ({ crewId, crew }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { contract } = useMatchMakingContract();

  const handleClick = async () => {
    if (crewId) {
      await contract
        ?.addCrewToQueue(+crewId)
        .then(async (tsx) => {
          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              // TODO: Refetch Crew and hide button
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (crew && crew?.currentlyInBucket === null) {
    return (
      <CustomButton
        my={4}
        size="sm"
        w="100%"
        onClick={handleClick}
        isLoading={loading}
        disabled={!!crew?.currentlyInBucket}
      >
        Join matchmaking queue
      </CustomButton>
    );
  } else if (crew && crew?.currentlyInBucket && crew?.currentlyInBucket?.state === 0) {
    return (
      <Flex align="center" justify="center" w="100%">
        <Text fontSize="md">You are waiting for match.</Text>
      </Flex>
    );
  } else if (crew && crew?.currentlyInBucket && crew?.currentlyInBucket?.state === 1) {
    return (
      <Flex align="center" justify="center" w="100%">
        <Text fontSize="md">Resolving bucket.</Text>
      </Flex>
    );
  } else if (crew && crew?.currentlyInBucket && crew?.currentlyInBucket?.state === 2) {
    return (
      <Flex align="center" justify="center" w="100%">
        <CustomButton size="sm">Resolve Match</CustomButton>
      </Flex>
    );
  } else {
    return null;
  }
};

export default JoinToMatchMakingQueue;
