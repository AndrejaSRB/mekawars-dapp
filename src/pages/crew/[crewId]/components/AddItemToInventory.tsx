import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useCrewsContract from '../../../../lib/contracts/useCrewsContract';
import { RefetchCrew } from '../index.page';

interface AddItemToInventoryProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const AddItemToInventory: FC<AddItemToInventoryProps> = ({ crewId, refetch }) => {
  const [itemId, setItemId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useCrewsContract();

  const handleChangeItemIds = (event: ChangeEvent<HTMLInputElement>) => {
    setItemId(event.target.value);
  };

  const handleClickAdd = async () => {
    if (crewId && itemId) {
      await contract
        ?.addItemToInventory(+crewId, itemId)
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

              setItemId('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Add item to inventory</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Item Id:</Text>

          <Input value={itemId} onChange={handleChangeItemIds} placeholder="Enter item id" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickAdd} isLoading={loading} w="100%">
        Add Item
      </CustomButton>
    </Box>
  );
};

export default AddItemToInventory;
