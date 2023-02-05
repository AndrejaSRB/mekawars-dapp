import { useWeb3Context } from "../context";
import useMockMekaWarsERC1155Items from "../lib/contracts/useMockMekaWarsERC1155Items";
import { useGetItemListQuery } from "../lib/graphql/operations/GetItemList.generated";
import CustomButton from "./CustomButton";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";
import { useState } from "react";

const MintItem: FC = () => {
  const [itemId, setItemId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { address } = useWeb3Context();

  const { refetch } = useGetItemListQuery();

  const { contract } = useMockMekaWarsERC1155Items();

  const handleChangeItemId = (event: ChangeEvent<HTMLInputElement>) => {
    setItemId(event.target.value);
  };

  const handleClickMint = async () => {
    if (address && contract && itemId) {
      const tsx = await contract.mockMint(address, itemId);
      setLoading(true);
      tsx
        .wait()
        .then(async () => {
          setLoading(false);

          await refetch();
        })
        .finally(() => {
          setLoading(false);
          setItemId("");
        });
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

      <CustomButton mt={4} onClick={handleClickMint} isLoading={loading}>
        Mint item
      </CustomButton>
    </Box>
  );
};

export default MintItem;
