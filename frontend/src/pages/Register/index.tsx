import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'
import useRegister from './useRegister'

const Register = () => {
  const { Submit, handleSubmit, setValue, watch, errors } = useRegister()

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
        <InputComponent
          type="email"
          placeholder="Email"
          value={watch('email')}
          onChange={(e) => setValue('email', e.target.value)}
          label="Email"
          errorText={errors.email?.message}
        />
        <InputComponent
          placeholder="National ID"
          value={watch('national_id')}
          onChange={(e) => setValue('national_id', e.target.value)}
          label="National ID"
          errorText={errors.national_id?.message}
        />

        <div className="w-full flex justify-center">
          <ButtonComponent>Register</ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default Register
