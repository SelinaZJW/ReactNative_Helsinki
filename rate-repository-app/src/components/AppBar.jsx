import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import useCurrentUser from '../hooks/useCurrentUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  console.log(currentUser)

  const handleSignOut = async () => {

    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
      height: 90,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 6,
      // ...
    },
    signInDisplay: {
      display: currentUser? 'none' : ''
    },
    signOutDisplay: {
      display: currentUser? '' : 'none'
    }
    
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        
        <Link to="/">
          <AppBarTab tabLabel='Repositories' />
        </Link>

        <Link to="/signin" style={styles.signInDisplay}>
          <AppBarTab tabLabel='Sign in'  />
        </Link>

        <Pressable onPress={handleSignOut} style={styles.signOutDisplay}>
          <AppBarTab tabLabel='Sign out' />
        </Pressable>

      </ScrollView>
      
    </View>
  );
};

export default AppBar;