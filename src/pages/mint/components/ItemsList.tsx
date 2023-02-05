import type { Item } from "../../../lib/graphql/types";
import { GridItem, Flex, Text, Heading, Grid, Box } from "@chakra-ui/react";
import type { FC } from "react";
import { useCallback } from "react";

const getItemType: Record<string, string> = {
  0: "Basic RoboOoga",
  1: "Basic MekaApe",
  2: "Special MekaApe",
};

// const getItemAbility: Record<string, string> = {
//   0: "Ambush",
//   1: "Berserk",
//   2: "Taunt",
//   3: "Guard Break",
//   4: "Amor X",
//   5: "Amor Percent",
// };

interface ItemsListProps {
  items: Item[] | undefined;
}
const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const renderItems = useCallback(
    (item: Item) => (
      <GridItem
        key={item.id}
        as={Flex}
        flexDir="column"
        border="1px solid white"
        borderRadius={8}
        p={3}
      >
        <Flex align="center">
          <Text fontSize="sm">ID:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.id}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">ItemType:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {getItemType[item.itemType]}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">Attack:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.attack}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">Health:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.health}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">Level:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.level}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">Season:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.season}
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontSize="sm">Abbilities:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            empty
          </Text>
        </Flex>
      </GridItem>
    ),
    []
  );

  return (
    <Box mt={8}>
      <Heading mt={4}>Items List</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {items?.map(renderItems)}
      </Grid>
    </Box>
  );
};

export default ItemsList;
