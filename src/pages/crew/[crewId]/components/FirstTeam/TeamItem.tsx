import { FC, useCallback } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { useGetOogaInventoryQuery } from '../../../../../lib/graphql/operations/GetOogaInventory.generated';
import { InventoryItem } from '../../../../../lib/graphql/types';
import OogaTypeString from '../../../../../types/OogaTypeStrings';

interface TeamItemProps {
  id: string | undefined | null;
  oogaType: number | undefined | null;
}

const TeamItem: FC<TeamItemProps> = ({ id, oogaType }) => {
  const { data, loading } = useGetOogaInventoryQuery({
    fetchPolicy: 'no-cache',
    skip: !id,
    variables: {
      oogaId: `${id}` as string,
    },
  });

  const renderItemIndex = useCallback(
    (item: InventoryItem) => (
      <Text
        ml={1}
        fontSize="sm"
        as="span"
        fontWeight={800}
        key={`oogaId-${id}-item_index-${item?.index}`}
      >{`${item.index},`}</Text>
    ),
    [],
  );

  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Text fontSize="sm">Ooga ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {id}
        </Text>
      </Flex>

      <Flex align="center">
        <Flex fontSize="sm">OogaType:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {oogaType && OogaTypeString[oogaType]}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Item Index:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {loading
            ? 'Loading..'
            : data?.inventoryItems && data?.inventoryItems?.length > 0
            ? data?.inventoryItems.map(renderItemIndex)
            : 'Empty'}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default TeamItem;
