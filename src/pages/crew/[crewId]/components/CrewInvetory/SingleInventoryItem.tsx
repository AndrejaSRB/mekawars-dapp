import { ChangeEvent, FC, useCallback, useState } from 'react';
import { GridItem, Flex, Text, Input } from '@chakra-ui/react';
import CustomButton from '../../../../../components/CustomButton';
import useCrewsContract from '../../../../../lib/contracts/useCrewsContract';
import { InventoryItem } from '../../../../../lib/graphql/types';
import GetItemAbility from '../../../../../types/GetItemAbility';
import { RefetchCrew } from '../../index.page';

const getItemType: Record<string, string> = {
  0: 'Basic RoboOoga',
  1: 'Basic MekaApe',
  2: 'Special MekaApe',
};

interface SingleInvetoryItemProps {
  item: Pick<InventoryItem, 'id' | 'attributes' | 'index' | 'active'> | undefined | null;
  sortedCrewsIds: string[] | undefined;
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const SingleInventoryItem: FC<SingleInvetoryItemProps> = ({ item, crewId, sortedCrewsIds, refetch }) => {
  const [oogaId, setOogaId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useCrewsContract();

  const renderAbilities = useCallback(
    (abilities: number | null) => (
      <Text ml={1} key={Math.random()} as="span">
        {abilities !== null && GetItemAbility[abilities]},
      </Text>
    ),
    [],
  );
  const handleChangeOogaId = (event: ChangeEvent<HTMLInputElement>) => {
    setOogaId(event.target.value);
  };

  const handleClickSet = async () => {
    if (crewId && sortedCrewsIds && oogaId !== '' && item) {
      const moveItems = [
        {
          itemIndex: +item.index,
          equipToOogaId: +oogaId,
        },
      ];

      await contract
        ?.editFirstTeamAndEquipItems(+crewId, sortedCrewsIds, moveItems)
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
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleBurn = async () => {
    if (crewId && item) {
      await contract
        ?.deleteItemFromInventory(+crewId, +item?.index)
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
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Text fontSize="sm">ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Index:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.index}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Attack:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes?.attack}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Health:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes?.health}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Level:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes?.level}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Active:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.active ? 'Active' : 'Inactive'}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Item Type:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes &&
            item?.attributes?.itemType !== undefined &&
            item?.attributes?.itemType !== null &&
            getItemType[item?.attributes?.itemType]}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Abbilities:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes?.abilities && item?.attributes?.abilities.length > 0
            ? item?.attributes?.abilities.map(renderAbilities)
            : 'N/A'}
        </Text>
      </Flex>

      <Flex align="center" flexDir="column" mt={4} borderTopWidth="1px" pt={2}>
        <Text fontSize="sm">
          Enter the Ooga ID you want to associate the item. If you enter 0, that means the item will be removed from the
          current Ooga. Ooga level must be bigger or equal with the level of the item.
        </Text>
        <Input value={oogaId} onChange={handleChangeOogaId} placeholder="Enter Ooga Id" mt={2} />

        <CustomButton size="sm" w="100%" mt={1} isLoading={loading} onClick={handleClickSet}>
          Set
        </CustomButton>
      </Flex>

      <Flex mt={4} borderTopWidth="1px">
        <CustomButton size="sm" w="100%" mt={1} isLoading={loading} onClick={handleBurn}>
          Burn
        </CustomButton>
      </Flex>
    </GridItem>
  );
};

export default SingleInventoryItem;
