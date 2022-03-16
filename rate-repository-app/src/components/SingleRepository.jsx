import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY } from '../graphql/queries';
import Text from "./Text";

const styles = StyleSheet.create({
  reviewContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    marginTop: 20,
    flexDirection: 'row',
  }, 
  separator: {
    height: 10,
  },
  ratingContainer: {
    alignContent: 'flex-start',
  }, 
  rating: {
    color: '#008080',
    width: 65,
    height: 65,
    textAlign: 'center', 
    paddingTop: 20,
    borderRadius: 32.5,
    borderColor: '#008080',
    borderWidth: 2, 
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    maxWidth: '90%',
    paddingLeft: 15,
  }, 
})

const SingleRepository = () => {
  let repositoryId = useParams();
  const id = repositoryId.repositoryId;   //parameters is an object, need to access the value with key
  const { data } = useQuery(SINGLE_REPOSITORY, { variables: { repositoryId: id} });
  const repository = data? data.repository: {};
  console.log(repository)
  const reviews = repository.reviews?.edges.map(edge => edge.node)
  console.log(reviews)
  
  const ReviewItem = ({ review }) => {
  
    const date = review.createdAt.split('T')[0];
    console.log(date);
      
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating} fontWeight="bold" fontSize="subheading">
            {review.rating}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={{ marginBottom: 5}}>
            {review.user.username}
          </Text>
          <Text color='textSecondary' style={{ marginBottom: 10}}>
            {date}
          </Text>
          <Text>
            {review.text}
          </Text>
        </View>
      </View>
    )
  }

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem review={item} />}
    ItemSeparatorComponent={ItemSeparator}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <RepositoryItem  repository={repository} singleView='flex'/>}
    // ...
  />
  )
};

export default SingleRepository
