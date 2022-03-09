import Text from './Text';
import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const SignIn = () => {
  const initialValues = {
    username: '',
    password: ''
  }

  const styles = StyleSheet.create({
    formikContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f5f5f5',
      // height: 200
    },
    // input: {
    //   borderWidth: 2,
    //   borderRadius: 5,
    //   borderColor: '#708090',
    //   padding: 10,
    //   width: '80%',
    //   height: 50, 
    //   margin: 10,
    // },
    button: {
      borderRadius: 5,
      padding: 10,
      width: '80%',
      height: 50, 
      backgroundColor: '#008080',
      display: 'flex',
      justifyContent: 'center',
      margin: 10,
    }
  })

  const onSubmit = (values) => {

    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      
      {({ handleSubmit } ) => 
      <View style={styles.formikContainer}>
        <FormikTextInput name='username' placeholder='Username'  />
        <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text color='textTab' fontWeight='bold' fontSize='subheading' style={{textAlign: 'center'}} >
            Sign in
          </Text>
        </Pressable>
      </View>
      }

    </Formik>
  );
};

export default SignIn;