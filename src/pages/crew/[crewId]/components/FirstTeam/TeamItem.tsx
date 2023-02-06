import { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import OogaTypeString from '../../../../../types/OogaTypeStrings';

interface TeamItemProps {
  id: string | undefined | null;
  oogaType: number | undefined | null;
}

const TeamItem: FC<TeamItemProps> = ({ id, oogaType }) => {
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
          x, x, x
        </Text>
      </Flex>
    </GridItem>
  );
};

export default TeamItem;
