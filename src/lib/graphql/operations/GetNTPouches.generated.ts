import type * as Types from "../types";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

const defaultOptions = {} as const;
export type GetNtPouchesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetNtPouchesQuery = {
  __typename?: "Query";
  ntpouches: Array<{ __typename?: "NTPouch"; id: string; amount: string }>;
};

export const GetNtPouchesDocument = gql`
  query GetNTPouches {
    ntpouches {
      id
      amount
    }
  }
`;

/**
 * __useGetNtPouchesQuery__
 *
 * To run a query within a React component, call `useGetNtPouchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNtPouchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNtPouchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNtPouchesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNtPouchesQuery,
    GetNtPouchesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNtPouchesQuery, GetNtPouchesQueryVariables>(
    GetNtPouchesDocument,
    options
  );
}
export function useGetNtPouchesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNtPouchesQuery,
    GetNtPouchesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNtPouchesQuery, GetNtPouchesQueryVariables>(
    GetNtPouchesDocument,
    options
  );
}
export type GetNtPouchesQueryHookResult = ReturnType<
  typeof useGetNtPouchesQuery
>;
export type GetNtPouchesLazyQueryHookResult = ReturnType<
  typeof useGetNtPouchesLazyQuery
>;
export type GetNtPouchesQueryResult = Apollo.QueryResult<
  GetNtPouchesQuery,
  GetNtPouchesQueryVariables
>;