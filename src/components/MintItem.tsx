import { useWeb3Context } from "../context";
import useMockMekaApesERC from "../lib/contracts/useMockMekaApesERC721";
import useMockMekaWarsERC1155Items from "../lib/contracts/useMockMekaWarsERC1155Items";
import OogaType from "../types/OogaType";
import CustomButton from "./CustomButton";
import CustomNumberField from "./CustomNumberField";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";

const MintItem: FC = () => {
  const [itemId, setItemId] = useState<string>("");
  const { address } = useWeb3Context();

  const { contract } = useMockMekaWarsERC1155Items();

  const handleChangeItemId = (event: ChangeEvent<HTMLInputElement>) => {
    setItemId(event.target.value);
  };

  const handleClickMint = async () => {
    if (address && contract && itemId) {
      const tsx = await contract.mockMint(address, itemId);
      await tsx.wait();
      // RERETACH
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Mint Item</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Item Id:</Text>

          <Input value={itemId} onChange={handleChangeItemId} />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickMint}>
        Mint item
      </CustomButton>
    </Box>
  );
};

export default MintItem;
