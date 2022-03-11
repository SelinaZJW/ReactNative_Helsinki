import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    display: 'flex',
  },
  tinyAvator: {
    width: 65,
    height: 65,
    borderRadius: 10
  },
  headerContainer: {
    flexDirection: 'row',
    // height: 100,
  },
  headerAvatorContainer: {
    alignContent: 'flex-start',
  },
  headerInfoContainer: {
    flexDirection: 'column',
    paddingLeft: 15,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    maxWidth: '90%'  //so that text would wrap within a child
  },
  headerInfoSingle: {
    marginBottom: 10,
  },
  languageTab: {
    backgroundColor: '#008080',
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
  }, 
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  singleDataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center', ///make text line up at center
    height: 50,
  }
});

const SingleData = ({ name, value }) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  };
  const formattedValue = kFormatter(value)

  return (
    <View style={styles.singleDataContainer}>
      <Text fontWeight="bold" style={{textAlign: 'center'}}>{formattedValue}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <View style={styles.headerAvatorContainer}>
          <Image style={styles.tinyAvator} source={{url: repository.ownerAvatarUrl}}/>
        </View>
        <View style={styles.headerInfoContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.headerInfoSingle}>{repository.fullName}</Text>
          <Text color='textSecondary'style={styles.headerInfoSingle}>{repository.description}</Text>
          <Text color='textTab' style={styles.languageTab} >{repository.language}</Text>
        </View>
      </View>

      <View style={styles.dataContainer}>
        {/* <View style={styles.singleDataContainer}>
          <Text>{repository.stargazersCount}</Text>
          <Text>Stars</Text>
        </View> */}
        <SingleData name='Stars' value={repository.stargazersCount} />
        <SingleData name='Forks' value={repository.forksCount}  />
        <SingleData name='Reviews' value={repository.reviewCount}  />
        <SingleData name='Rating' value={repository.ratingAverage}  />
      </View>
      

    </View>
  )
}

export default RepositoryItem