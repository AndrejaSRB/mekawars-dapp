import { useWeb3Context } from "../../context";
import { useGetMyOogasLazyQuery } from "../../lib/graphql/operations/GetMyOoga.generated";
import type { Ooga } from "../../lib/graphql/types";
import OogaItem from "./OogaItem";
import { Heading, Grid, Box } from "@chakra-ui/react";
import type { FC } from "react";
import { useCallback, useEffect } from "react";

const MyOogas: FC = () => {
  const { address } = useWeb3Context();
  const [getMyOogas, { data: myOogas }] = useGetMyOogasLazyQuery();

  const renderMyOogas = useCallback((ooga: Ooga) => {
    if (ooga?.oogaType === 3 && !ooga?.inCrew) {
      return <OogaItem ooga={ooga} key={ooga?.id} />;
    } else {
      return null;
    }
  }, []);

  useEffect(() => {
    if (address) {
      getMyOogas({
        variables: {
          address,
        },
      });
    }
  }, [address, getMyOogas]);

  return (
    <Box mt={4}>
      <Heading>My MekaApes Without Crew:</Heading>
      <Grid
        mt={4}
        gap={3}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {myOogas?.oogas?.map(renderMyOogas)}
      </Grid>
    </Box>
  );
};

export default MyOogas;
