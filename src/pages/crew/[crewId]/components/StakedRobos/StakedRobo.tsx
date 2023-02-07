import { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import OogaTypeString from '../../../../../types/OogaTypeStrings';

interface StakedRoboProps {
  id: string | undefined | null;
  oogaType: number | undefined | null;
  oogaLevel: number | undefined | null;
}

const StakedRobo: FC<StakedRoboProps> = ({ id, oogaType, oogaLevel }) => {
  return (
    <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Flex fontSize="sm">Ooga ID:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
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
        <Flex fontSize="sm">Level:</Flex>
        <Text ml={1} fontWeight={800} fontSize="sm">
          {oogaLevel}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default StakedRobo;
