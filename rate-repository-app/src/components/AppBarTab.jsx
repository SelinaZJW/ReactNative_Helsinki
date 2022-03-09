import { StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 5,
    borderColor: '#fffaf0',
    borderStyle: 'solid',
    // borderLeftWidth: 2,
    borderWidth: 1,
    // borderRadius: 3,
  }
})

const AppBarTab = ({ tabLabel }) => {
  return (
    // <Pressable  >
      <Text fontWeight="bold" fontSize='fontSizeTab' color='textTab' style={styles.text}>
        {tabLabel}
      </Text>
    // </Pressable>
  );
};

export default AppBarTab;
