import { gql } from '@apollo/client';
// import { AUTHENTICATE_INPUT } from './fragments';

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser( $credentials: AuthenticateInput) {
    authenticate(
      credentials: $credentials
    ) {
      accessToken
    }
  }
`
export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(
      review: $review
    ) {
      id
      user {
        username
        id
      }
      repositoryId
      rating
      createdAt
      text
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`