import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { InferType } from 'yup'

import MyContext from '../../components/Context/MyContext'
import request from '../../libs/request'
import validationSchema from './validation'

type RegisterFormType = InferType<typeof validationSchema>
const defaultValues: RegisterFormType = {
  username: '',
  password: '',
  email: '',
  national_id: ''
}
const useRegister = () => {
  const context = useContext(MyContext)

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<RegisterFormType>({
    resolver: yupResolver(validationSchema),
    defaultValues
  })

  const navigate = useNavigate()

  const Submit = async (fromData: RegisterFormType) => {
    try {
      const response = await request('/api/users/', 'POST', {
        user: {
          username: fromData.username,
          password: fromData.password,
          email: fromData.email
        },
        national_id: fromData.national_id
      })
      console.log(response)
      context?.setState(true)
      sessionStorage.setItem('isLogin', 'true')
      // Redirect to another page upon successful login
      navigate('/') // Adjust the route as necessary
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  return {
    Submit,
    handleSubmit,
    setValue,
    watch,
    errors
  }
}
export default useRegister
