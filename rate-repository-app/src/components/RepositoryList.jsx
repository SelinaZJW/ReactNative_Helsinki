import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  filter: {
    height: 30, 
    paddingLeft: 20, 
    borderColor: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15, 
    color: '#586069',
    marginBottom: 10
  }, 
  searchKeyword: {
    //width: '95%',
    height: 30,
    padding: 20,
    margin: 20,
    color: '#586069',
    borderColor: '#586069',
    borderWidth: 2,
    borderRadius: 8
  }
});

const ChooseFilter = ({setOrderDirection, setOrderBy}) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  console.log(selectedFilter)
  //console.log(orderBy)
  //console.log(orderDirection)

  const onChange = (itemValue) => {
    setSelectedFilter(itemValue);
    
    if (itemValue === 'latest') {
      setOrderBy('CREATED_AT')
      setOrderDirection('DESC')
    }
    if (itemValue === 'highRated') {
      setOrderBy('RATING_AVERAGE')
      setOrderDirection('DESC')
    }
    if (itemValue === 'lowRated') {
      setOrderBy('RATING_AVERAGE')
      setOrderDirection('ASC')
    }
  }


  return (
    <Picker
      selectedValue={selectedFilter}
      onValueChange={onChange}
      style={styles.filter}
      >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highRated"  />
      <Picker.Item label="Lowest rated repositories" value="lowRated" />
    </Picker>
  )
}


const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const [text, onChangeText] = React.useState('');
    const [searchKeyword] = useDebounce(text, 1000);
    console.log(text)
    console.log(searchKeyword)
    const { setSearchKeyword, setOrderDirection, setOrderBy } = this.props
    //const {text} = this.props;  // this.props contains the component's props

    useEffect(() => {
      setSearchKeyword(searchKeyword)
    }, [searchKeyword])

    return (
      <View >
        <TextInput 
          placeholder='Search...' 
          onChangeText={onChangeText}
          value={text}
          style={styles.searchKeyword}
          />
        <ChooseFilter setOrderDirection={setOrderDirection} setOrderBy={setOrderBy} />
      </View>
    );
  };

  render() {
    const {repositories, onEndReach} = this.props

    const repositoryNodes = repositories 
    ? repositories.edges?.map(edge => edge.node)
    : [];

    console.log(this.repositories)
    console.log(repositoryNodes)

    return (
      <FlatList
        // data={repositories}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem repository={item} singleView='none' />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        
      />
    );
  }
}



const RepositoryList = () => {
  const [orderDirection, setOrderDirection] = useState(undefined)
  const [orderBy, setOrderBy] = useState(undefined)
  const [searchKeyword, setSearchKeyword] = useState(undefined)
  const first = 8

  const { repositories } = useRepositories({ orderDirection, orderBy, searchKeyword, first });
  const onEndReach = () => {
    console.log('You have reached the end of the list');
  };
  
  return (
    <View>
      {/* <ChooseFilter setOrderDirection={setOrderDirection} setOrderBy={setOrderBy} /> */}
      <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} setSearchKeyword={setSearchKeyword} setOrderDirection={setOrderDirection} setOrderBy={setOrderBy} />
    </View>
  )
};

export default RepositoryList;