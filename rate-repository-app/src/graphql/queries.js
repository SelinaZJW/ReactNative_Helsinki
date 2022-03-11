import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
`