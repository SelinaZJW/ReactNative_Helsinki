import { TextInput as NativeTextInput} from 'react-native';
import { StyleSheet } from 'react-native';


const TextInput = ({ error, ...props }) => {
  const styles = StyleSheet.create({
    input: {
      borderWidth: 2,
      borderRadius: 5,
      borderColor: error? '#d73a4a': '#708090',
      padding: 10,
      width: '80%',
      height: 50, 
      margin: 10,
    },
  });

  const textInputStyle = [styles.input];

  return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;