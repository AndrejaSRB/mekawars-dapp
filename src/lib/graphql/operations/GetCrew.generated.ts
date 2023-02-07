import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMyCrewQueryVariables = Types.Exact<{
  crewId: Types.Scalars['String'];
}>;


export type GetMyCrewQuery = { __typename?: 'Query', crew?: { __typename?: 'Crew', id: string, rating: string, level?: string | null, durability: string, ntAmount?: string | null, mekaLeader: { __typename?: 'Ooga', id: string }, oogasInCrew?: Array<{ __typename?: 'Ooga', id: string, oogaType?: number | null, level?: number | null }> | null, firstTeam: Array<{ __typename?: 'Ooga', oogaType?: number | null, id: string, orderIndexInFirstTeam?: number | null }>, inventory?: Array<{ __typename?: 'InventoryItem', id: string, active: boolean, index: number, charge?: string | null, attributes?: { __typename?: 'Item', attack: string, health: string, id: string, abilities: Array<number | null>, itemType: number, level: string, season: string } | null }> | null, currentlyInBucket?: { __typename?: 'Bucket', id: string, randomSeed?: string | null, createdAt?: string | null, state?: number | null, resolvedMatches: Array<{ __typename?: 'Match', id: string, wonCrewId?: string | null }>, crewIds?: Array<{ __typename?: 'CrewInBucket', id: string, firstTeam: Array<{ __typename?: 'Ooga', id: string }> }> | null } | null } | null };


export const GetMyCrewDocument = gql`
    query GetMyCrew($crewId: String!) {
  crew(id: $crewId) {
    id
    mekaLeader {
      id
    }
    rating
    level
    durability
    ntAmount
    oogasInCrew {
      id
      oogaType
      level
    }
    firstTeam {
      oogaType
      id
      orderIndexInFirstTeam
    }
    inventory {
      id
      active
      index
      charge
      attributes {
        attack
        health
        id
        abilities
        itemType
        level
        season
      }
    }
    currentlyInBucket {
      id
      randomSeed
      createdAt
      state
      resolvedMatches {
        id
        wonCrewId
      }
      crewIds {
        id
        firstTeam {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetMyCrewQuery__
 *
 * To run a query within a React component, call `useGetMyCrewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyCrewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyCrewQuery({
 *   variables: {
 *      crewId: // value for 'crewId'
 *   },
 * });
 */
export function useGetMyCrewQuery(baseOptions: Apollo.QueryHookOptions<GetMyCrewQuery, GetMyCrewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyCrewQuery, GetMyCrewQueryVariables>(GetMyCrewDocument, options);
      }
export function useGetMyCrewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyCrewQuery, GetMyCrewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyCrewQuery, GetMyCrewQueryVariables>(GetMyCrewDocument, options);
        }
export type GetMyCrewQueryHookResult = ReturnType<typeof useGetMyCrewQuery>;
export type GetMyCrewLazyQueryHookResult = ReturnType<typeof useGetMyCrewLazyQuery>;
export type GetMyCrewQueryResult = Apollo.QueryResult<GetMyCrewQuery, GetMyCrewQueryVariables>;