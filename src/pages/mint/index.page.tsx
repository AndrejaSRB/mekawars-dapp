import MintItem from "../../components/MintItem";
import MintNTPouch from "../../components/MintNTPouch";
import MintOoga from "../../components/MintOoga";
import Navigation from "../../components/Navigation";
import SwitchNetwork from "../../components/SwitchNetwork";
import { useWeb3Context } from "../../context";
import { useGetItemListQuery } from "../../lib/graphql/operations/GetItemList.generated";
import { useGetNtPouchesQuery } from "../../lib/graphql/operations/GetNTPouches.generated";
import ItemsList from "./components/ItemsList";
import NTPouches from "./components/NTPouches";
import { Box, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const MintPage: NextPage = () => {
  const { address, network } = useWeb3Context();
  const { data: ntPouchesData, loading: isLoadingPouchesData } =
    useGetNtPouchesQuery();
  const { data: itemsListData, loading: isLoadingItemsList } =
    useGetItemListQuery();

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      {network && <SwitchNetwork chainId={network?.chainId} />}

      {address && <Text>Address: {address}</Text>}

      {!!address && (
        <>
          <Grid
            gap={4}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <MintOoga />
            <MintItem />
            <MintNTPouch />
          </Grid>
        </>
      )}

      {isLoadingItemsList ? (
        <Text>Loading Items...</Text>
      ) : (
        <ItemsList items={itemsListData?.items} />
      )}
      {isLoadingPouchesData ? (
        <Text>Loading NTPouches...</Text>
      ) : (
        <NTPouches ntpouches={ntPouchesData?.ntpouches} />
      )}
    </Box>
  );
};

export default MintPage;
