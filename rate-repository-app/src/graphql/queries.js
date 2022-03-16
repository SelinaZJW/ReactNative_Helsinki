import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
query GetRepositories ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $after: String, $first: Int) {
  repositories(
    orderDirection: $orderDirection, 
    orderBy: $orderBy, 
    searchKeyword: $searchKeyword,
    after: $after, 
    first: $first
  ) {
    ...repositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const CURRENT_USER = gql`
  query {
    me {
      id,
      username
    }
  }
`;

export const SINGLE_REPOSITORY = gql`
  query SingleRepository ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      url, 
      fullName,
      ratingAverage,
      reviewCount,
      stargazersCount,
      forksCount,
      ownerAvatarUrl,
      language,
      description,
      id,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`