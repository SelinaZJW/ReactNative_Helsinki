import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [authenticate, result] = useMutation(AUTHENTICATE_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();


  const signIn = async ({ credentials }) => {
    // call the mutate function here with the right arguments
    const {data} = await authenticate({ variables: { credentials: credentials }})
            //await data here, so that data is updated with the call and not undefined
    console.log(data)
    const accessToken = data? data.authenticate.accessToken : null;
    await authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
    
    return data 
  };

  return [signIn, result];
};

export default useSignIn;