import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useCrewsContract from '../../../../lib/contracts/useCrewsContract';
import { RefetchCrew } from '../index.page';

interface UnstakeRoboOogasProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const UnstakeRoboOogas: FC<UnstakeRoboOogasProps> = ({ crewId, refetch }) => {
  const [itemsIds, setItemsIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useCrewsContract();

  const handleChangeItemIds = (event: ChangeEvent<HTMLInputElement>) => {
    setItemsIds(event.target.value.split(','));
  };

  const handleClickUnstake = async () => {
    if (crewId && itemsIds && itemsIds?.length > 0) {
      await contract
        ?.removeRobosFromCrew(+crewId, itemsIds)
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

              setItemsIds([]);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Unstake Robo Oogas</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Item Id(s):</Text>

          <Input value={itemsIds} onChange={handleChangeItemIds} placeholder="Enter id or ids: 1,2,3" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickUnstake} isLoading={loading} w="100%">
        Unstake
      </CustomButton>
    </Box>
  );
};

export default UnstakeRoboOogas;
