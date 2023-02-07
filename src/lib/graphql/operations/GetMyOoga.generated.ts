import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../types';

const defaultOptions = {} as const;
export type GetMyOogasQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;

export type GetMyOogasQuery = {
  __typename?: 'Query';
  oogas: Array<{
    __typename?: 'Ooga';
    id: string;
    level?: number | null;
    oogaType?: number | null;
    health?: string | null;
    inCrew?: {
      __typename?: 'Crew';
      id: string;
      active: boolean;
      boxSlots: Array<Types.BoxSlot>;
      durability: string;
      firstTeam: Array<Types.Ooga>;
      mekaLeader: Types.Ooga;
      owner: Types.User;
      rating: string;
    } | null;
  }>;
};

export const GetMyOogasDocument = gql`
  query GetMyOogas($address: String!) {
    oogas(where: { owner: $address }) {
      id
      level
      oogaType
      health
      inCrew {
        id
        active
        boxSlots
        durability
        firstTeam
        mekaLeader
        owner
        rating
      }
    }
  }
`;

/**
 * __useGetMyOogasQuery__
 *
 * To run a query within a React component, call `useGetMyOogasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOogasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOogasQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetMyOogasQuery(baseOptions: Apollo.QueryHookOptions<GetMyOogasQuery, GetMyOogasQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyOogasQuery, GetMyOogasQueryVariables>(GetMyOogasDocument, options);
}
export function useGetMyOogasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyOogasQuery, GetMyOogasQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyOogasQuery, GetMyOogasQueryVariables>(GetMyOogasDocument, options);
}
export type GetMyOogasQueryHookResult = ReturnType<typeof useGetMyOogasQuery>;
export type GetMyOogasLazyQueryHookResult = ReturnType<typeof useGetMyOogasLazyQuery>;
export type GetMyOogasQueryResult = Apollo.QueryResult<GetMyOogasQuery, GetMyOogasQueryVariables>;
