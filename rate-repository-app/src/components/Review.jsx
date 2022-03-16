import { useNavigate } from "react-router-native";
import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from "./Text";
import useCreateReview from "../hooks/useCreateReview";

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

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .max(100)
    .min(0),
  text: yup
    .string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}

export const ReviewContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      
      {({ handleSubmit } ) => 
      <View style={styles.formikContainer}>
        <FormikTextInput name='ownerName' placeholder='Repository owner name'  />
        <FormikTextInput name='repositoryName' placeholder='Repository name'  />
        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
        <FormikTextInput name='text' placeholder='Review' multiline='true'  />
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text color='textTab' fontWeight='bold' fontSize='subheading' style={{textAlign: 'center'}} >
            Create a review
          </Text>
        </Pressable>
      </View>
      }

    </Formik>
  );
}



const Review = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    const review = {ownerName: ownerName,repositoryName: repositoryName, rating: Number(rating), text: text};
    console.log(review)

    try {
      const data = await createReview({review: review})
      console.log(data)
      const repositoryId = data? data.createReview.repositoryId : "";
      navigate(`/${repositoryId}`)
    
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />

  );
};


export default Review;