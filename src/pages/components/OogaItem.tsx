import type { FC } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import type { Ooga } from '../../lib/graphql/types';
import OogaTypeString from '../../types/OogaTypeStrings';

interface OogaItemProps {
  ooga: Ooga | undefined;
}

const OogaItem: FC<OogaItemProps> = ({ ooga }) => (
  <GridItem key={ooga?.id} as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
    <Flex align="center">
      <Text fontSize="sm">ID:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ooga?.id}
      </Text>
    </Flex>

    <Flex align="center">
      <Text fontSize="sm">OogaType:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ooga?.oogaType && OogaTypeString[ooga?.oogaType]}
      </Text>
    </Flex>

    <Flex align="center">
      <Text fontSize="sm">Health:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ooga?.health}
      </Text>
    </Flex>

    <Flex align="center">
      <Text fontSize="sm">Level:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        {ooga?.level}
      </Text>
    </Flex>
  </GridItem>
);

export default OogaItem;
