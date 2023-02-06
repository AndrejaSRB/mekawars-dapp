import CustomButton from "../../components/CustomButton";
import type { Crew } from "../../lib/graphql/types";
import { SmallCrew } from "./MyCrews";
import { GridItem, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface CrewProps {
  crew: Pick<Crew, SmallCrew> | undefined;
}
const CrewItem: FC<CrewProps> = ({ crew }) => {
  const router = useRouter();

  const handleOpenCrew = async () => {
    if (crew?.id) {
      await router.push(`/crew/${crew.id}`);
    }
  };

  return (
    <GridItem
      key={crew?.id}
      as={Flex}
      flexDir="column"
      border="1px solid white"
      borderRadius={8}
      p={3}
    >
      <Flex align="center">
        <Text fontSize="sm">Crew ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {crew?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">MekaLeader ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {crew?.mekaLeader?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Durability:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {crew?.durability}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">Rating:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {crew?.rating}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">active:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {crew?.active ? "Active" : "Inactive"}
        </Text>
      </Flex>
      <CustomButton size="sm" mt={2} onClick={handleOpenCrew}>
        Open Crew
      </CustomButton>
    </GridItem>
  );
};

export default CrewItem;
