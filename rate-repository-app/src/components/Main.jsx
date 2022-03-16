import Constants from 'expo-constants';
import {  StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import Review from './Review';
import { Route, Routes, Navigate } from 'react-router-native';
import SignUp from './SignUp';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    width: '100%'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        
        <Route path='/review' element={<Review />} exact />
        <Route path='/:repositoryId' element={<SingleRepository />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;