import Button from '../../components/Button'
import Input from '../../components/Input'
import useRegister from './useRegister'

const Register = () => {
  const { Submit, handleSubmit, setValue, watch } = useRegister()
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(Submit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center flex-col gap-y-4 w-96">
        <Input
          type="text"
          placeholder="Username"
          value={watch('username')}
          onChange={(e) => setValue('username', e.target.value)}
          label="Username"
        />
        <Input
          type="password"
          placeholder="Password"
          value={watch('password')}
          onChange={(e) => setValue('password', e.target.value)}
          label="Password"
        />
        <Input
          type="email"
          placeholder="Email"
          value={watch('email')}
          onChange={(e) => setValue('email', e.target.value)}
          label="Email"
        />
        <Input
          type="text"
          placeholder="National ID"
          value={watch('national_id')}
          onChange={(e) => setValue('national_id', e.target.value)}
          label="National ID"
        />
        <div className="flex items-center justify-between">
          <Button>Register</Button>
        </div>
      </form>
    </div>
  )
}

export default Register
