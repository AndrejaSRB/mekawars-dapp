import { FC, useCallback } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import type { Item } from '../../../lib/graphql/types';
import GetItemAbility from '../../../types/GetItemAbility';

const getItemType: Record<string, string> = {
  0: 'Basic RoboOoga',
  1: 'Basic MekaApe',
  2: 'Special MekaApe',
};

interface ItemProps {
  item: Item | undefined;
}

const SingleItem: FC<ItemProps> = ({ item }) => {
  const renderAbilities = useCallback(
    (abilities: number | null) => (
      <Text ml={1} key={Math.random()} as="span">
        {abilities && GetItemAbility[abilities]},
      </Text>
    ),
    [],
  );

  return (
    <GridItem key={item?.id} as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Text fontSize="sm">ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.id}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">ItemType:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.itemType !== undefined && getItemType[item?.itemType]}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">Attack:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attack}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">Health:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.health}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">Level:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.level}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">Season:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.season}
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm">Abbilities:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.abilities && item?.abilities?.length > 0 ? item?.abilities?.map(renderAbilities) : 'N/A'}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default SingleItem;
