// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({orderDirection, orderBy, searchKeyword}, first) => {
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);
  const { data, error, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', variables: {orderDirection : orderDirection, orderBy: orderBy, searchKeyword: searchKeyword, first: first}});
  const  repositories = data? data.repositories : {};
  console.log(orderBy, orderDirection, searchKeyword)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderDirection, orderBy: orderBy, searchKeyword: searchKeyword, first: first
      },
    });
  };
  

  // const fetchRepositories = async () => {
  //   setLoading(true);

  //   // Replace the IP address part with your own IP address!
  //   const response = await fetch('http://192.168.1.105:5000/api/repositories');
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);


  return { repositories, loading, error, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;