import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'
import useLogin from './useLogin'
import validationSchema from './validation'

// assuming similar validation schema as Register

type FormData = {
  username: string
  password: string
}

const Login = () => {
  const { Submit } = useLogin()

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(Submit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-y-4 w-96">
        <InputComponent
          placeholder="Username"
          value={watch('username')}
          onChange={(e) => setValue('username', e.target.value)}
          label="Username"
          errorText={errors.username?.message}
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={watch('password')}
          onChange={(e) => setValue('password', e.target.value)}
          label="Password"
          errorText={errors.password?.message}
        />
        <div className="w-full flex justify-center">
          <ButtonComponent>Login</ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default Login
