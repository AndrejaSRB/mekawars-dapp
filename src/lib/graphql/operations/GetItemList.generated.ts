import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../types';

const defaultOptions = {} as const;
export type GetItemListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetItemListQuery = {
  __typename?: 'Query';
  items: Array<{
    __typename?: 'Item';
    id: string;
    itemType: number;
    attack: string;
    health: string;
    season: string;
    level: string;
    abilities: Array<number | null>;
  }>;
};

export const GetItemListDocument = gql`
  query GetItemList {
    items {
      id
      itemType
      attack
      health
      season
      level
      abilities
    }
  }
`;

/**
 * __useGetItemListQuery__
 *
 * To run a query within a React component, call `useGetItemListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetItemListQuery, GetItemListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetItemListQuery, GetItemListQueryVariables>(GetItemListDocument, options);
}
export function useGetItemListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetItemListQuery, GetItemListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetItemListQuery, GetItemListQueryVariables>(GetItemListDocument, options);
}
export type GetItemListQueryHookResult = ReturnType<typeof useGetItemListQuery>;
export type GetItemListLazyQueryHookResult = ReturnType<typeof useGetItemListLazyQuery>;
export type GetItemListQueryResult = Apollo.QueryResult<GetItemListQuery, GetItemListQueryVariables>;
