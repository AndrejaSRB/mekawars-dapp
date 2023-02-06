import CustomButton from "../../../../components/CustomButton";
import useMatchMakingContract from "../../../../lib/contracts/useMatchMakingContract";
import { FC, useState } from "react";

interface JoinToMatchMakingQueueProps {
  crewId: string | undefined;
}

const JoinToMatchMakingQueue: FC<JoinToMatchMakingQueueProps> = ({
  crewId,
}) => {
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

  return (
    <CustomButton
      my={4}
      size="sm"
      w="100%"
      onClick={handleClick}
      isLoading={loading}
      disabled
    >
      Join matchmaking queue
    </CustomButton>
  );
};

export default JoinToMatchMakingQueue;
