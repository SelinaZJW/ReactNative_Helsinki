import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useApolloClient } from '@apollo/client';

const useCreateReview = () => {
  const apolloClient = useApolloClient();
  const [addReview, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ review }) => {
    const {data} = await addReview({ variables: { review: review }})
    console.log(data)
    apolloClient.resetStore();

    return data
  }

  return [createReview, result]

}

export default useCreateReview