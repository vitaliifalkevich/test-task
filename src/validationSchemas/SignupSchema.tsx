import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .matches(/^[A-Za-z]+$/, { message: 'Only latin alphabet' })
    .required('User name required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 symbols')
    .required('Password required'),
  chooseCountry: Yup.string()
    .required('You must select your country'),
  gender: Yup.string()
    .required('You must select the gender'),
  agreement: Yup.string()
    .required('You must accept the policies')
})

export default SignupSchema
