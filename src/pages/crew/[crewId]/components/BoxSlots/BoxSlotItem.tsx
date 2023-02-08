import { format } from 'date-fns';
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Flex, GridItem, Input, Text } from '@chakra-ui/react';
import CustomButton from '../../../../../components/CustomButton';
import useBoxContract from '../../../../../lib/contracts/useBoxContract';
import { BoxSlot } from '../../../../../lib/graphql/types';
import { convertSecondsToMinutes } from '../../../../../utils/convertSecondsToMinutes';
import { RefetchCrew } from '../../index.page';

const BoxSlotStateString: Record<number, string> = {
  0: 'Empty',
  1: 'Occupied',
  2: 'Open requested',
  3: 'Upgrade requested',
};

interface BoxSlotItemProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
  boxSlot:
    | Pick<
        BoxSlot,
        'id' | 'index' | 'box_rarity' | 'box_createdAt' | 'state' | 'box_level' | 'babyOogaCharge' | 'stakedBabyOoga'
      >
    | undefined
    | null;
}

const BoxSlotItem: FC<BoxSlotItemProps> = ({ boxSlot, crewId, refetch }) => {
  const [babyOogaId, setBabyOogaID] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const date = useMemo(
    () => (boxSlot && boxSlot?.box_createdAt ? new Date(convertSecondsToMinutes(+boxSlot.box_createdAt)) : null),
    [boxSlot],
  );

  const { contract } = useBoxContract();

  const handleChangeBabyOogaId = (event: ChangeEvent<HTMLInputElement>) => {
    setBabyOogaID(event.target.value);
  };

  const handleOpen = async () => {
    if (crewId && boxSlot && boxSlot?.index !== undefined && boxSlot?.index !== null && boxSlot?.state === 1) {
      await contract
        ?.openBox(+crewId, boxSlot?.index)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
            })
            .finally(async () => {
              setLoading(false);

              setBabyOogaID('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleInstant = async () => {
    if (crewId && boxSlot && boxSlot?.index !== undefined && boxSlot?.index !== null) {
      await contract
        ?.openBox(+crewId, boxSlot?.index)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
            })
            .finally(async () => {
              setLoading(false);

              setBabyOogaID('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleStake = async () => {
    if (
      crewId &&
      boxSlot &&
      boxSlot?.index !== undefined &&
      boxSlot?.index !== null &&
      babyOogaId !== '' &&
      boxSlot?.stakedBabyOoga === null
    ) {
      await contract
        ?.stakeBabyOoga(+babyOogaId, +crewId, +boxSlot?.index)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
            })
            .finally(async () => {
              setLoading(false);

              setBabyOogaID('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleUnstake = async () => {
    if (crewId && boxSlot && boxSlot?.index !== undefined && boxSlot?.index !== null && boxSlot?.stakedBabyOoga) {
      await contract
        ?.unstakeBabyOoga(+crewId, +boxSlot?.index)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
            })
            .finally(async () => {
              setLoading(false);

              setBabyOogaID('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center" mb={1}>
        <Text fontSize="sm">Slot:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.id}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Index:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.index}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Box Rarity:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.box_rarity}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Box Created At:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {date && format(new Date(date), 'dd-MM-yyyy')}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">State:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.state !== null && boxSlot?.state !== undefined && BoxSlotStateString[boxSlot?.state]}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Box Level:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.box_level}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Baby Ooga Charge:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.babyOogaCharge}
        </Text>
      </Flex>

      <Flex align="center" mb={1}>
        <Text fontSize="sm">Staked Baby Ooga:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {boxSlot?.stakedBabyOoga?.id ?? 'Empty'}
        </Text>
      </Flex>

      <Flex align="center" mt={4}>
        <CustomButton size="sm" w="50%" mr={1} isLoading={loading} onClick={handleOpen}>
          Open
        </CustomButton>
        <CustomButton size="sm" w="50%" onClick={handleInstant} isLoading={loading}>
          Instant
        </CustomButton>
      </Flex>

      <Flex align="center" flexDir="column" mt={4} borderTopWidth="1px" pt={2}>
        <Text fontSize="sm">Stake Baby Ooga</Text>
        <Input
          value={babyOogaId}
          onChange={handleChangeBabyOogaId}
          placeholder="Enter Baby Ooga Id"
          mt={2}
          disabled={!!boxSlot?.stakedBabyOoga}
        />

        {boxSlot?.stakedBabyOoga ? (
          <CustomButton size="sm" w="100%" mt={1} isLoading={loading} onClick={handleUnstake}>
            Unstake
          </CustomButton>
        ) : (
          <CustomButton size="sm" w="100%" mt={1} isLoading={loading} onClick={handleStake}>
            Stake
          </CustomButton>
        )}
      </Flex>
    </GridItem>
  );
};

export default BoxSlotItem;
