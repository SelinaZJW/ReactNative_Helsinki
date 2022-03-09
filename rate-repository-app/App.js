import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';


export default function App() {
  console.log('hey there waht goes')
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      {/* <Text>Open up App.js to start working on your app This Shit is tedious!!! How about now?see condole now??</Text>
      <Text>more text</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
