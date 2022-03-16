import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { useApolloClient } from '@apollo/client';

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER);
  const apolloClient = useApolloClient();


  const signUp = async ({ user }) => {
    // call the mutate function here with the right arguments
    const {data} = await createUser({ variables: { user: user}})
            //await data here, so that data is updated with the call and not undefined
    console.log(data)
    apolloClient.resetStore();
    
    return data 
  };

  return [signUp, result];
};

export default useSignUp;