import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBucketsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBucketsQuery = { __typename?: 'Query', buckets: Array<{ __typename?: 'Bucket', id: string, state?: number | null, createdAt?: string | null, resolvedMatches: Array<{ __typename?: 'Match', id: string }>, crewInBuckets?: Array<{ __typename?: 'CrewInBucket', id: string, firstTeam: Array<{ __typename?: 'Ooga', id: string }>, crew?: { __typename?: 'Crew', id: string } | null }> | null }> };


export const GetBucketsDocument = gql`
    query GetBuckets {
  buckets {
    id
    state
    createdAt
    resolvedMatches {
      id
    }
    crewInBuckets {
      id
      firstTeam {
        id
      }
      crew {
        id
      }
    }
  }
}
    `;

/**
 * __useGetBucketsQuery__
 *
 * To run a query within a React component, call `useGetBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBucketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBucketsQuery(baseOptions?: Apollo.QueryHookOptions<GetBucketsQuery, GetBucketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBucketsQuery, GetBucketsQueryVariables>(GetBucketsDocument, options);
      }
export function useGetBucketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBucketsQuery, GetBucketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBucketsQuery, GetBucketsQueryVariables>(GetBucketsDocument, options);
        }
export type GetBucketsQueryHookResult = ReturnType<typeof useGetBucketsQuery>;
export type GetBucketsLazyQueryHookResult = ReturnType<typeof useGetBucketsLazyQuery>;
export type GetBucketsQueryResult = Apollo.QueryResult<GetBucketsQuery, GetBucketsQueryVariables>;