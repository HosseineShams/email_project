import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import MyContext from '../../components/Context/MyContext'
import request from '../../libs/request'
import validationSchema from './validation'

// Import your validation schema for login

type LoginFormType = {
  username: string
  password: string
}

const useLogin = () => {
  const context = useContext(MyContext)
  const navigate = useNavigate()

  // Setup the form handling using react-hook-form
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    register
  } = useForm<LoginFormType>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  // Define the submit function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Submit = async (formData: LoginFormType) => {
    try {
      // API call to the login endpoint
      const response = await request('/api/login/', 'POST', formData)
      console.log('Login successful:', response)

      // Handle successful login: Update context, store token, etc.
      context?.setState(true) // Adjust this according to your state management logic
      sessionStorage.setItem('isLogin', 'true')

      // Redirect to another page upon successful login
      navigate('/') // Adjust the route as necessary
      window.location.reload()
    } catch (error) {
      console.error('Login error:', error)
      // Handle login errors (e.g., show an error message)
    }
  }

  return {
    handleSubmit,
    errors,
    setValue,
    watch,
    register,
    Submit
  }
}

export default useLogin
