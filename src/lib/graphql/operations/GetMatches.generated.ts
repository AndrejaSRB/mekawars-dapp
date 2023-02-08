import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMatchesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMatchesQuery = { __typename?: 'Query', matches: Array<{ __typename?: 'Match', id: string, wonCrewId?: string | null, firstCrewWithBucket?: { __typename?: 'CrewInBucket', id: string, crew?: { __typename?: 'Crew', id: string, active: boolean, level?: string | null, ntAmount?: string | null, rating: string, firstTeam: Array<{ __typename?: 'Ooga', id: string }> } | null } | null, secondCrewWithBucket?: { __typename?: 'CrewInBucket', id: string, crew?: { __typename?: 'Crew', id: string, active: boolean, level?: string | null, ntAmount?: string | null, rating: string, firstTeam: Array<{ __typename?: 'Ooga', id: string }> } | null } | null }> };


export const GetMatchesDocument = gql`
    query GetMatches {
  matches {
    id
    wonCrewId
    firstCrewWithBucket {
      id
      crew {
        id
        active
        level
        ntAmount
        rating
        firstTeam {
          id
        }
      }
    }
    secondCrewWithBucket {
      id
      crew {
        id
        active
        level
        ntAmount
        rating
        firstTeam {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetMatchesQuery__
 *
 * To run a query within a React component, call `useGetMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMatchesQuery(baseOptions?: Apollo.QueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
      }
export function useGetMatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
        }
export type GetMatchesQueryHookResult = ReturnType<typeof useGetMatchesQuery>;
export type GetMatchesLazyQueryHookResult = ReturnType<typeof useGetMatchesLazyQuery>;
export type GetMatchesQueryResult = Apollo.QueryResult<GetMatchesQuery, GetMatchesQueryVariables>;