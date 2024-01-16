import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  national_id: Yup.string()
    .required('National ID is required')
    .matches(/^[0-9]+$/, 'National ID must be a number')
    .length(10, 'National ID must be 10 digits')
})
export default validationSchema
