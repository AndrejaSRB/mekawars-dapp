import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Heading, Input, Text } from '@chakra-ui/react';
import { useWeb3Context } from '../context';
import useMockNTPouchContract from '../lib/contracts/useMockNTPouchContract';
import { useGetNtPouchesQuery } from '../lib/graphql/operations/GetNTPouches.generated';
import CustomButton from './CustomButton';
import CustomNumberField from './CustomNumberField';

const MintNTPouch: FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [pouchId, setPouchID] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { address } = useWeb3Context();
  const { refetch } = useGetNtPouchesQuery();

  const { contract } = useMockNTPouchContract();

  const handleChangeAmount = (_: string, valueAsNumber: number) => {
    setAmount(valueAsNumber);
  };

  const handleChangePouchId = (event: ChangeEvent<HTMLInputElement>) => {
    setPouchID(event.target.value);
  };
  const handleClickMint = async () => {
    if (address && contract && pouchId) {
      const tsx = await contract.mockMint(address, +pouchId, +amount);

      setLoading(true);
      tsx
        .wait()
        .then(async () => {
          setLoading(false);
          await refetch();
        })
        .finally(() => {
          setLoading(false);

          setPouchID('');
          setAmount(1);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Mint NTPouch</Heading>

      <Grid
        w="100%"
        gap={4}
        mt={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Amount:</Text>

          <CustomNumberField defaultValue={1} min={1} max={100} onChange={handleChangeAmount} value={amount} />
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Pouch Id:</Text>

          <Input value={pouchId} onChange={handleChangePouchId} />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleClickMint} isLoading={loading} w="100%">
        Mint NTPouch
      </CustomButton>
    </Box>
  );
};

export default MintNTPouch;
