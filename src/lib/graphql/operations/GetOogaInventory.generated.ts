import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOogaInventoryQueryVariables = Types.Exact<{
  oogaId: Types.Scalars['String'];
}>;


export type GetOogaInventoryQuery = { __typename?: 'Query', inventoryItems: Array<{ __typename?: 'InventoryItem', index: number, active: boolean, id: string, equipedToOoga?: { __typename?: 'Ooga', id: string, oogaType?: number | null } | null }> };


export const GetOogaInventoryDocument = gql`
    query GetOogaInventory($oogaId: String!) {
  inventoryItems(where: {equipedToOoga_: {id: $oogaId}}) {
    index
    active
    id
    equipedToOoga {
      id
      oogaType
    }
  }
}
    `;

/**
 * __useGetOogaInventoryQuery__
 *
 * To run a query within a React component, call `useGetOogaInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOogaInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOogaInventoryQuery({
 *   variables: {
 *      oogaId: // value for 'oogaId'
 *   },
 * });
 */
export function useGetOogaInventoryQuery(baseOptions: Apollo.QueryHookOptions<GetOogaInventoryQuery, GetOogaInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOogaInventoryQuery, GetOogaInventoryQueryVariables>(GetOogaInventoryDocument, options);
      }
export function useGetOogaInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOogaInventoryQuery, GetOogaInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOogaInventoryQuery, GetOogaInventoryQueryVariables>(GetOogaInventoryDocument, options);
        }
export type GetOogaInventoryQueryHookResult = ReturnType<typeof useGetOogaInventoryQuery>;
export type GetOogaInventoryLazyQueryHookResult = ReturnType<typeof useGetOogaInventoryLazyQuery>;
export type GetOogaInventoryQueryResult = Apollo.QueryResult<GetOogaInventoryQuery, GetOogaInventoryQueryVariables>;