import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useMockNTPouchContract from '../../../../lib/contracts/useMockNTPouchContract';
import { RefetchCrew } from '../index.page';

interface DepositNTPouchProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const DepositNTPouch: FC<DepositNTPouchProps> = ({ crewId, refetch }) => {
  const [ntPouchId, setNtPouchId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useMockNTPouchContract();

  const handleChangeNtPocuh = (event: ChangeEvent<HTMLInputElement>) => {
    setNtPouchId(event.target.value);
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleDeposit = async () => {
    if (crewId && ntPouchId !== '' && amount !== '') {
      console.log('+crewId, +ntPouchId, +amount', +crewId, +ntPouchId, +amount);
      await contract
        ?.depositPouch(+crewId, +ntPouchId, +amount)
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

              setNtPouchId('');

              setAmount('');
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box mt={4} border="1px solid white" p={4} borderRadius={8}>
      <Heading>Deposit NTPouch</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>NTPouch ID:</Text>

          <Input value={ntPouchId} onChange={handleChangeNtPocuh} placeholder="Enter id" />
        </GridItem>

        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Amount:</Text>

          <Input value={amount} onChange={handleChangeAmount} placeholder="Enter amount" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleDeposit} isLoading={loading} w="100%">
        Deposit
      </CustomButton>
    </Box>
  );
};

export default DepositNTPouch;
