
import * as yup from 'yup'
export const validationSchema = yup
  .object()
  .shape({
    otp: yup.string().otp('Please enter a valid email address')
  })
  .required();
    
