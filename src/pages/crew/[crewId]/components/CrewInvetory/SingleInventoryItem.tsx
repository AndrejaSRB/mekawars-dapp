import { FC, useCallback } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { InventoryItem } from '../../../../../lib/graphql/types';
import GetItemAbility from '../../../../../types/GetItemAbility';

interface SingleInvetoryItemProps {
  item: Pick<InventoryItem, 'id' | 'attributes'> | undefined | null;
}

const SingleInventoryItem: FC<SingleInvetoryItemProps> = ({ item }) => {
  const renderAbilities = useCallback(
    (abilities: number | null) => (
      <Text ml={1} key={Math.random()} as="span">
        {abilities !== null && GetItemAbility[abilities]},
      </Text>
    ),
    [],
  );

  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Text fontSize="sm">ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.id}
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
        <Text fontSize="sm">Abbilities:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {item?.attributes?.abilities && item?.attributes?.abilities.length > 0
            ? item?.attributes?.abilities.map(renderAbilities)
            : 'N/A'}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default SingleInventoryItem;
