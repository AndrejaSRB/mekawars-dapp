import { ChangeEvent, FC, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Input, Box, Text } from '@chakra-ui/react';
import CustomButton from '../../../../components/CustomButton';
import useMockNTPouchContract from '../../../../lib/contracts/useMockNTPouchContract';
import { RefetchCrew } from '../index.page';

interface WithdrawNTPouchProps {
  crewId: string | undefined;
  refetch: RefetchCrew;
}

const WithdrawNTPouch: FC<WithdrawNTPouchProps> = ({ crewId, refetch }) => {
  const [pouchId, setPouchId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { contract } = useMockNTPouchContract();

  const handleChangePouchId = (event: ChangeEvent<HTMLInputElement>) => {
    setPouchId(event.target.value);
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleUnstake = async () => {
    if (crewId && pouchId !== '' && amount !== '') {
      await contract
        ?.withdrawPouch(+crewId, +pouchId, +amount)
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
              setPouchId('');
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
      <Heading>Withdraw NTPouches</Heading>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>NTPouch ID:</Text>

          <Input value={pouchId} onChange={handleChangePouchId} placeholder="Enter NTPouch ID" />
        </GridItem>
      </Grid>

      <Grid w="100%" gap={4} mt={4}>
        <GridItem as={Flex} flexDir="column">
          <Text mb={1}>Amount:</Text>

          <Input value={amount} onChange={handleChangeAmount} placeholder="Enter Amount" />
        </GridItem>
      </Grid>

      <CustomButton mt={4} onClick={handleUnstake} isLoading={loading} w="100%">
        Withdraw
      </CustomButton>
    </Box>
  );
};

export default WithdrawNTPouch;
