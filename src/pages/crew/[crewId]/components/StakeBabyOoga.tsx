import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useBoxContract from '../../../../lib/contracts/useBoxContract';
import { RefetchCrew } from '../index.page';

interface StakeBabyOogaProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const StakeBabyOoga: FC<StakeBabyOogaProps> = ({ crewId, refetch }) => {
  const [oogaId, setOogaId] = useState<string>('');
  const [slotIndex, setSlotIndex] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useBoxContract();

  const handleChangeOogaId = (event: ChangeEvent<HTMLInputElement>) => {
    setOogaId(event.target.value);
  };

  const handleChangeSlotIndex = (event: ChangeEvent<HTMLInputElement>) => {
    setSlotIndex(event.target.value);
  };

  const handleStake = async () => {
    if (crewId && oogaId !== '' && slotIndex !== '') {
      await contract
        ?.stakeBabyOoga(+oogaId, +crewId, +slotIndex)
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

              setOogaId('');

              setSlotIndex('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Stake Baby Ooga</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Ooga Id:</Text>

          <Input value={oogaId} onChange={handleChangeOogaId} placeholder="Enter id" />
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Slot Index:</Text>

          <Input value={slotIndex} onChange={handleChangeSlotIndex} placeholder="Enter slot index" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleStake} isLoading={loading} w="100%">
        Stake Baby Ooga
      </CustomButton>
    </Box>
  );
};

export default StakeBabyOoga;
