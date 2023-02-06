import type { FC } from 'react';
import { useState } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import CustomButton from '../../components/CustomButton';
import { useWeb3Context } from '../../context';
import useCrewsContract from '../../lib/contracts/useCrewsContract';
import { useGetMyOogasLazyQuery } from '../../lib/graphql/operations/GetMyOoga.generated';
import { useMyCrewsLazyQuery } from '../../lib/graphql/operations/MyCrews.generated';
import type { Ooga } from '../../lib/graphql/types';

interface MekaApeItemProps {
  ooga: Ooga | undefined;
}

const MekaApeItem: FC<MekaApeItemProps> = ({ ooga }) => {
  const { address } = useWeb3Context();
  const { contract } = useCrewsContract();
  const [loading, setLoading] = useState<boolean>(false);
  const [getMyCrews] = useMyCrewsLazyQuery();
  const [getMyOogas] = useGetMyOogasLazyQuery();

  const handleCreateCrew = async () => {
    if (ooga?.id && contract && address) {
      await contract
        ?.makeNewCrew(+ooga.id)
        .then((tsx) => {
          setLoading(true);

          tsx
            .wait()
            .then(async () => {
              setLoading(false);

              await getMyCrews({
                variables: {
                  address,
                },
              });

              await getMyOogas({
                variables: {
                  address,
                },
              });
            })
            .catch((error) => {
              console.error('handleCreateCrew error', error);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error('handleCreateCrew error', error);
        });
    }
  };
  return (
    <GridItem key={ooga?.id} as={Flex} flexDir="column" border="1px solid white" borderRadius={8} p={3}>
      <Flex align="center">
        <Text fontSize="sm">ID:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          {ooga?.id}
        </Text>
      </Flex>

      <Flex align="center">
        <Text fontSize="sm">ItemType:</Text>
        <Text ml={1} fontSize="sm" fontWeight={800}>
          MekaApe
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

      <CustomButton size="sm" mt={2} isLoading={loading} onClick={handleCreateCrew}>
        Create Crew
      </CustomButton>
    </GridItem>
  );
};

export default MekaApeItem;
