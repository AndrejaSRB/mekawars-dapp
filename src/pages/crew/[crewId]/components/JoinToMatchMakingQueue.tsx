import { FC, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useMatchMakingContract from '../../../../lib/contracts/useMatchMakingContract';
import { Crew } from '../../../../lib/graphql/types';
import { RefetchCrew, RefetchMatches } from '../index.page';

interface JoinToMatchMakingQueueProps {
  crewId: string | undefined;
  crew: Pick<Crew, 'currentlyInBucket'> | undefined | null;
  refetch: RefetchCrew;
  refetchMatches: RefetchMatches;
}

const JoinToMatchMakingQueue: FC<JoinToMatchMakingQueueProps> = ({ crewId, crew, refetch, refetchMatches }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { contract } = useMatchMakingContract();

  const handleClickJoin = async () => {
    if (crewId) {
      await contract
        ?.addCrewToQueue(+crewId)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
              await refetchMatches();
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

  const handleResolveBucket = async () => {
    if (crewId) {
      await contract
        ?.manualMatchmakeRequest(+crewId)
        .then(async (tsx) => {
          setLoading(true);
          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
              await refetchMatches();
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

  const handleResolveMatch = async () => {
    if (crewId) {
      await contract
        ?.resolveMatchForCrew(+crewId)
        .then(async (tsx) => {
          setLoading(true);
          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
              await refetchMatches();
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
        onClick={handleClickJoin}
        isLoading={loading}
        disabled={!!crew?.currentlyInBucket || loading}
      >
        Join matchmaking queue
      </CustomButton>
    );
  } else if (
    crew &&
    crew?.currentlyInBucket &&
    crew?.currentlyInBucket?.state === 0 &&
    crew?.currentlyInBucket?.crewInBuckets &&
    crew?.currentlyInBucket?.crewInBuckets?.length >= 4
  ) {
    return (
      <Flex align="center" justify="center" w="100%">
        <CustomButton size="sm" w="100%" onClick={handleResolveBucket} isLoading={loading} my={4}>
          Resolve Bucket
        </CustomButton>
      </Flex>
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
        <CustomButton size="sm" w="100%" onClick={handleResolveMatch} isLoading={loading} my={4}>
          Resolve Match
        </CustomButton>
      </Flex>
    );
  } else {
    return null;
  }
};

export default JoinToMatchMakingQueue;
