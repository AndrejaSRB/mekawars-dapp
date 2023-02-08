import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBoxSlotsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBoxSlotsQuery = { __typename?: 'Query', boxSlots: Array<{ __typename?: 'BoxSlot', id: string, index?: string | null, state?: number | null, box_rarity?: number | null, box_level?: string | null, box_createdAt?: string | null, babyOogaCharge?: string | null, crew?: { __typename?: 'Crew', id: string } | null }> };


export const GetBoxSlotsDocument = gql`
    query GetBoxSlots {
  boxSlots {
    id
    index
    state
    crew {
      id
    }
    box_rarity
    box_level
    box_createdAt
    babyOogaCharge
  }
}
    `;

/**
 * __useGetBoxSlotsQuery__
 *
 * To run a query within a React component, call `useGetBoxSlotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoxSlotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoxSlotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoxSlotsQuery(baseOptions?: Apollo.QueryHookOptions<GetBoxSlotsQuery, GetBoxSlotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoxSlotsQuery, GetBoxSlotsQueryVariables>(GetBoxSlotsDocument, options);
      }
export function useGetBoxSlotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoxSlotsQuery, GetBoxSlotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoxSlotsQuery, GetBoxSlotsQueryVariables>(GetBoxSlotsDocument, options);
        }
export type GetBoxSlotsQueryHookResult = ReturnType<typeof useGetBoxSlotsQuery>;
export type GetBoxSlotsLazyQueryHookResult = ReturnType<typeof useGetBoxSlotsLazyQuery>;
export type GetBoxSlotsQueryResult = Apollo.QueryResult<GetBoxSlotsQuery, GetBoxSlotsQueryVariables>;