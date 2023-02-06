import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, itemAmounts: Array<{ __typename?: 'UserItemAmount', id: string, amount?: string | null, item?: { __typename?: 'Item', id: string, abilities: Array<number | null>, attack: string, health: string, itemType: number, level: string, season: string } | null }>, notStakedOogas: Array<{ __typename?: 'Ooga', id: string, oogaType?: number | null, level?: number | null, health?: string | null }>, ntPouchAmounts: Array<{ __typename?: 'UserNTPouchAmount', id: string, amount?: string | null, ntPouch?: { __typename?: 'NTPouch', id: string, active: boolean, amount: string } | null }> } | null };


export const GetUserDocument = gql`
    query GetUser($address: String!) {
  user(id: $address) {
    id
    itemAmounts {
      id
      amount
      item {
        id
        abilities
        attack
        health
        itemType
        level
        season
      }
    }
    notStakedOogas {
      id
      oogaType
      level
      health
    }
    ntPouchAmounts {
      id
      amount
      ntPouch {
        id
        active
        amount
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;