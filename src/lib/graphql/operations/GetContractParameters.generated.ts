import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetContractParametersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetContractParametersQuery = { __typename?: 'Query', contractParameter?: { __typename?: 'ContractParameter', id: string, box_babyOogaChargeNeededForUpgrade?: string | null, box_boxWaitingTime?: string | null, box_instantOpenBoxPrice?: string | null, crews_burnInventoryItemNTAmount?: string | null, crews_crewStartDurability?: string | null, matchmaking_durabilityDecrease?: string | null, matchmaking_maxBucketSize?: string | null, matchmaking_maxRatingDiff?: string | null, matchmaking_minBucketSize?: string | null, matchmaking_minTimeOffset?: string | null } | null };


export const GetContractParametersDocument = gql`
    query GetContractParameters {
  contractParameter(id: "1") {
    id
    box_babyOogaChargeNeededForUpgrade
    box_boxWaitingTime
    box_instantOpenBoxPrice
    crews_burnInventoryItemNTAmount
    crews_crewStartDurability
    matchmaking_durabilityDecrease
    matchmaking_maxBucketSize
    matchmaking_maxRatingDiff
    matchmaking_minBucketSize
    matchmaking_minTimeOffset
  }
}
    `;

/**
 * __useGetContractParametersQuery__
 *
 * To run a query within a React component, call `useGetContractParametersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractParametersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractParametersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContractParametersQuery(baseOptions?: Apollo.QueryHookOptions<GetContractParametersQuery, GetContractParametersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractParametersQuery, GetContractParametersQueryVariables>(GetContractParametersDocument, options);
      }
export function useGetContractParametersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractParametersQuery, GetContractParametersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractParametersQuery, GetContractParametersQueryVariables>(GetContractParametersDocument, options);
        }
export type GetContractParametersQueryHookResult = ReturnType<typeof useGetContractParametersQuery>;
export type GetContractParametersLazyQueryHookResult = ReturnType<typeof useGetContractParametersLazyQuery>;
export type GetContractParametersQueryResult = Apollo.QueryResult<GetContractParametersQuery, GetContractParametersQueryVariables>;