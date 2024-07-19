import * as yup from 'yup';

export const signupValidationSchema = yup
    .object()
    .shape({
        code: yup.string().required('Verification code is required')
            .min(5, 'Verification code should be at least 5 characters long')
            .max(7, 'Verificaiton could sould be maximum 7 characters long')
            .matches(/^\d+$/, 'Verification code should be numbers only')
    })
    .required();