import { ChangeEvent, FC, useState } from 'react';
import { Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import CustomButton from '../../../../../components/CustomButton';
import useCrewsContract from '../../../../../lib/contracts/useCrewsContract';
import { RefetchCrew } from '../../index.page';

interface EditFirstTeamProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const EditFirstTeam: FC<EditFirstTeamProps> = ({ crewId, refetch }) => {
  const [itemsIds, setItemsIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useCrewsContract();

  const handleChangeItemIds = (event: ChangeEvent<HTMLInputElement>) => {
    setItemsIds(event.target.value.split(','));
  };

  const handleEdit = async () => {
    if (crewId && itemsIds && itemsIds?.length > 0) {
      await contract
        ?.editFirstTeamAndEquipItems(+crewId, itemsIds, [])
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
    <Flex flexDir="column" maxW="100%" borderWidth="1px" borderColor="white.100" borderRadius={8} p={3} mt={3}>
      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>
            Enter the team Ooga ids list. The order is IMPORTANT! For example the list of IDs: 3,1,8,5 Also if you skip
            some number in the list who is already in the first team, that ooga will be removed from the first team.
          </Text>

          <Input mt={3} value={itemsIds} onChange={handleChangeItemIds} placeholder="Enter list of IDs: 3,1,8,5" />
        </GridItem>
      </Grid>

      <CustomButton size="sm" mt={4} onClick={handleEdit} isLoading={loading}>
        Edit First Team
      </CustomButton>
    </Flex>
  );
};

export default EditFirstTeam;
