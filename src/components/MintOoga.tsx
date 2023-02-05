import { useWeb3Context } from "../context";
import useMockMekaApesERC from "../lib/contracts/useMockMekaApesERC721";
import { useGetMyOogasLazyQuery } from "../lib/graphql/operations/GetMyOoga.generated";
import type OogaType from "../types/OogaType";
import CustomButton from "./CustomButton";
import CustomNumberField from "./CustomNumberField";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";
import { useState } from "react";

const MintOoga: FC = () => {
  const [oogaType, setOogaType] = useState<OogaType>(0);
  const [level, setLevel] = useState<number>(1);
  const [health, setHealth] = useState<number>(1);
  const [attack, setAttack] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { address } = useWeb3Context();
  const [getMyOogas] = useGetMyOogasLazyQuery();

  const { contract } = useMockMekaApesERC();

  const handleChangeOogaType = (event: ChangeEvent<HTMLSelectElement>) => {
    setOogaType(+event.target.value);
  };

  const handleChangeLevel = (_: string, valueAsNumber: number) => {
    setLevel(valueAsNumber);
  };

  const handleChangeHealth = (_: string, valueAsNumber: number) => {
    setHealth(valueAsNumber);
  };

  const handleChangeAttack = (_: string, valueAsNumber: number) => {
    setAttack(valueAsNumber);
  };

  const handleClickMint = async () => {
    if (address && contract) {
      const tsx = await contract.mockMint(address, {
        oogaType,
        level,
        health,
        attack,
      });

      setLoading(true);
      tsx
        .wait()
        .then(async () => {
          setLoading(false);

          await getMyOogas({
            variables: {
              address,
            },
          });
        })
        .finally(() => {
          setLoading(false);

          setLevel(1);
          setHealth(1);
          setAttack(1);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Mint Ooga</Heading>

      <Grid
        w="100%"
        gap={4}
        mt={4}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Ooga Type:</Text>

          <Select
            placeholder="Pick Ooga Type"
            value={oogaType}
            onChange={handleChangeOogaType}
          >
            <option value={0}>Genesis</option>
            <option value={1}>Baby Ooga</option>
            <option value={2}>Robo Ooga</option>
            <option value={3}>MekaApe</option>
          </Select>
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Level:</Text>

          <CustomNumberField
            defaultValue={1}
            min={1}
            max={10}
            onChange={handleChangeLevel}
            value={level}
          />
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Health:</Text>

          <CustomNumberField
            defaultValue={1}
            min={1}
            max={10}
            onChange={handleChangeHealth}
            value={health}
          />
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Attack:</Text>

          <CustomNumberField
            defaultValue={1}
            min={1}
            max={10}
            onChange={handleChangeAttack}
            value={attack}
          />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickMint} isLoading={loading}>
        Mint Ooga
      </CustomButton>
    </Box>
  );
};

export default MintOoga;
