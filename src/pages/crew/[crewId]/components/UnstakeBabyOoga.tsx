import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useBoxContract from '../../../../lib/contracts/useBoxContract';
import { RefetchCrew } from '../index.page';

interface UnstakeBabyOogaProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const UnstakeBabyOoga: FC<UnstakeBabyOogaProps> = ({ crewId, refetch }) => {
  const [slotIndex, setSlotIndex] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useBoxContract();

  const handleChangeSlotIndex = (event: ChangeEvent<HTMLInputElement>) => {
    setSlotIndex(event.target.value);
  };

  const handleUnstake = async () => {
    if (crewId && slotIndex !== '') {
      await contract
        ?.unstakeBabyOoga(+crewId, +slotIndex)
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
      <Heading>Unstake Baby Ooga</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Ooga ID:</Text>

          <Input value={slotIndex} onChange={handleChangeSlotIndex} placeholder="Enter id" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleUnstake} isLoading={loading} w="100%">
        Unstake Baby Ooga
      </CustomButton>
    </Box>
  );
};

export default UnstakeBabyOoga;
