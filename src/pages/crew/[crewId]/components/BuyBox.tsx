import { FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import CustomNumberField from '../../../../components/CustomNumberField';
import useBoxContract from '../../../../lib/contracts/useBoxContract';
import { ContractParameter } from '../../../../lib/graphql/types';
import { RefetchCrew } from '../index.page';

interface BuyMysteryBoxProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const BuyMysteryBox: FC<BuyMysteryBoxProps> = ({ crewId, refetch }) => {
  const [level, setLevel] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useBoxContract();

  const handleChangeLevel = (_: string, valueAsNumber: number) => {
    setLevel(valueAsNumber);
  };

  const handleClickBuy = async () => {
    if (crewId && level >= 1 && level <= 10 && contract) {
      await contract
        .buyMysteryBox(+crewId, level)
        .then(async (tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);
              await refetch();
            })
            .finally(async () => {
              setLoading(false);

              setLevel(1);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Buy Mystery Box</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Mystery Box Level:</Text>

          <CustomNumberField defaultValue={1} min={1} max={10} onChange={handleChangeLevel} value={level} />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickBuy} isLoading={loading} w="100%">
        Buy Box
      </CustomButton>
    </Box>
  );
};

export default BuyMysteryBox;
