import * as yup from 'yup'




export const signinValidationSchema = yup
    .object()
    .shape({
        email: yup.string().required().email('Please enter a valid email address'),
        password: yup.string().required('Please enter a valid password')
  })
  .required();