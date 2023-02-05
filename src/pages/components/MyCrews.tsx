import { useWeb3Context } from "../../context";
import { useMyCrewsLazyQuery } from "../../lib/graphql/operations/MyCrews.generated";
import type { Crew } from "../../lib/graphql/types";
import { Heading, Grid, Box, Text, GridItem } from "@chakra-ui/react";
import type { FC } from "react";
import { useCallback, useEffect } from "react";

const MyCrews: FC = () => {
  const { address } = useWeb3Context();
  const [getMyCrews, { data: myCrews }] = useMyCrewsLazyQuery();

  const renderMyCrews = useCallback(
    (crew: Crew | undefined) => (
      <GridItem>
        <Text key={crew?.id}>Crew: {crew?.id}</Text>
      </GridItem>
    ),
    []
  );

  useEffect(() => {
    if (address) {
      getMyCrews({
        variables: {
          address,
        },
      });
    }
  }, [address, getMyCrews]);

  return (
    <Box mt={4}>
      <Heading>My Crews:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {myCrews?.crews && myCrews?.crews?.length > 0 ? (
          myCrews?.crews?.map(renderMyCrews)
        ) : (
          <Text>There is no any crew.</Text>
        )}
      </Grid>
    </Box>
  );
};

export default MyCrews;
