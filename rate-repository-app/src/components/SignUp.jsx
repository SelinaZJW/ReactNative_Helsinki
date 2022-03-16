import Text from './Text';
import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), 'password must be the same'])
    .required('Password is required'),
});

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
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

export const SignUpContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      
      {({ handleSubmit } ) => 
      <View style={styles.formikContainer}>
        <FormikTextInput name='username' placeholder='Username'  />
        <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
        <FormikTextInput name='passwordConfirmation' placeholder='Password Confirmation' secureTextEntry={true} />
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text color='textTab' fontWeight='bold' fontSize='subheading' style={{textAlign: 'center'}} >
            Sign Up
          </Text>
        </Pressable>
      </View>
      }

    </Formik>
  );
}
const SignUp = () => {
  const [ signUp ] = useSignUp();
  const [ signIn ] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    const user = {username: username, password: password};
    const credentials = {username: username, password: password};
    console.log(user)

    try {
      const dataSignUp = await signUp({user: user});
      console.log(dataSignUp); 
      const dataSignIn = await signIn({credentials: credentials})
      console.log(dataSignIn)
     
      navigate('/')
    
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
    // <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      
    //   {({ handleSubmit } ) => 
    //   <View style={styles.formikContainer}>
    //     <FormikTextInput name='username' placeholder='Username'  />
    //     <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
    //     <Pressable onPress={handleSubmit} style={styles.button}>
    //       <Text color='textTab' fontWeight='bold' fontSize='subheading' style={{textAlign: 'center'}} >
    //         Sign in
    //       </Text>
    //     </Pressable>
    //   </View>
    //   }

    // </Formik>
  );
};

export default SignUp;