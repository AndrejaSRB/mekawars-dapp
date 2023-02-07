import { FC } from 'react';
import { Flex, GridItem, Text } from '@chakra-ui/react';
import CustomButton from '../../../../../components/CustomButton';

const BoxSlot: FC = () => (
  <GridItem as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
    <Flex align="center" mb={4}>
      <Text fontSize="sm">Slot:</Text>
      <Text ml={1} fontSize="sm" fontWeight={800}>
        1
      </Text>
    </Flex>

    <Flex align="center">
      <CustomButton size="sm" w="50%" mr={1}>
        Open
      </CustomButton>
      <CustomButton size="sm" w="50%">
        Instant
      </CustomButton>
    </Flex>

    <Flex align="center" flexDir="column" mt={4} borderTopWidth="1px" pt={2}>
      <Text fontSize="sm">Stake Baby Ooga</Text>
      {/* <Input value={oogaId} onChange={handleChangeOogaId} placeholder="Enter Ooga Id" mt={2} /> */}

      <CustomButton size="sm" w="100%" mt={1}>
        Stake
      </CustomButton>
    </Flex>
  </GridItem>
);

export default BoxSlot;
