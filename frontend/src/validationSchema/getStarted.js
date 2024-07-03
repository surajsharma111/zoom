import * as yup from 'yup'
export const validationSchema = yup
  .object()
  .shape({
    email: yup.string().email('Please enter a valid email address')
  })
  .required();
    
