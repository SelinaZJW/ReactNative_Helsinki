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
