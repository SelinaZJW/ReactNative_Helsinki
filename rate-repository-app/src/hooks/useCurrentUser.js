import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../graphql/queries";

const useCurrentUser = () => {
  const { data, error, loading} = useQuery(CURRENT_USER, {fetchPolicy: 'cache-and-network',});
  const currentUser = data ? data.me : null;

  return { currentUser, loading, error };
}

export default useCurrentUser