import type * as Types from "../types";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

const defaultOptions = {} as const;
export type MyCrewsQueryVariables = Types.Exact<{
  address: Types.Scalars["String"];
}>;

export type MyCrewsQuery = {
  __typename?: "Query";
  crews: Array<{
    __typename?: "Crew";
    id: string;
    owner: User;
    active: boolean;
    boxSlots: Array<BoxSlot>;
    durability: string;
    firstTeam: Array<Ooga>;
    mekaLeader: Ooga;
    rating: string;
  }>;
};

export const MyCrewsDocument = gql`
  query MyCrews($address: String!) {
    crews(where: { owner: $address }) {
      id
      owner
      active
      boxSlots
      durability
      firstTeam
      mekaLeader
      rating
    }
  }
`;

/**
 * __useMyCrewsQuery__
 *
 * To run a query within a React component, call `useMyCrewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCrewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCrewsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useMyCrewsQuery(
  baseOptions: Apollo.QueryHookOptions<MyCrewsQuery, MyCrewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyCrewsQuery, MyCrewsQueryVariables>(
    MyCrewsDocument,
    options
  );
}
export function useMyCrewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyCrewsQuery, MyCrewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyCrewsQuery, MyCrewsQueryVariables>(
    MyCrewsDocument,
    options
  );
}
export type MyCrewsQueryHookResult = ReturnType<typeof useMyCrewsQuery>;
export type MyCrewsLazyQueryHookResult = ReturnType<typeof useMyCrewsLazyQuery>;
export type MyCrewsQueryResult = Apollo.QueryResult<
  MyCrewsQuery,
  MyCrewsQueryVariables
>;
