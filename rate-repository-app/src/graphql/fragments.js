import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on RepositoryConnection {
    edges {
      node {
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        language
        description
        id
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }`

// export const AUTHENTICATE_INPUT = gql`
//   fragment authenticateInput on AuthenticateInput {
//     username: string!
//     password: string!
//   }
// `