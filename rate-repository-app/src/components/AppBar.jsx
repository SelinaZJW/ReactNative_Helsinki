import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

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
  tab: {
    paddingLeft: 5,
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>{/* ... */}
        <Link to="/">
          <AppBarTab tabLabel='Repositories' style={styles.tab}/>
        </Link>
        <Link to="/signin">
          <AppBarTab tabLabel='Sign in' style={styles.tab} />
        </Link>
      </ScrollView>
      
    </View>
  );
};

export default AppBar;