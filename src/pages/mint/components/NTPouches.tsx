import type NTPouch from "../../../types/NTPouch";
import { GridItem, Flex, Heading, Grid, Box, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { useCallback } from "react";

interface NTPouchesProps {
  ntpouches: NTPouch[] | undefined;
}

const NTPouches: FC<NTPouchesProps> = ({ ntpouches }) => {
  const renderPouches = useCallback(
    (item: NTPouch) => (
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
          <Text fontSize="sm">Amount:</Text>
          <Text ml={1} fontSize="sm" fontWeight={800}>
            {item.amount}
          </Text>
        </Flex>
      </GridItem>
    ),
    []
  );

  return (
    <Box mt={8}>
      <Heading mt={4}>NTPouches List</Heading>

      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {ntpouches?.map(renderPouches)}
      </Grid>
    </Box>
  );
};

export default NTPouches;
