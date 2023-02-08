import type { NextPage } from 'next';
import { useCallback } from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Navigation from '../../components/Navigation';
import { useGetBucketsQuery } from '../../lib/graphql/operations/GetBuckets.generated';
import { Bucket } from '../../lib/graphql/types';
import BucketItem from './components/BucketItem';

const BucketsPage: NextPage = () => {
  const { data, loading } = useGetBucketsQuery();

  const renderBuckets = useCallback(
    (bucket: Bucket | undefined) => <BucketItem key={bucket?.id} bucket={bucket} />,
    [],
  );

  return (
    <Box maxW={1024} m="0 auto" p={4}>
      <Navigation />

      <Box mt={4}>
        <Heading>Buckets:</Heading>

        {loading ? (
          <Text>Loading buckets...</Text>
        ) : (
          <Grid
            mt={4}
            gap={3}
            templateColumns={{
              base: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
          >
            {data?.buckets && data?.buckets.length > 0 ? (
              // @ts-ignore
              data?.buckets.map(renderBuckets)
            ) : (
              <Text>There is no any bucket.</Text>
            )}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default BucketsPage;
