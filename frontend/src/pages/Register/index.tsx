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
        />
        <Input
          type="password"
          placeholder="Password"
          value={watch('password')}
          onChange={(e) => setValue('password', e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={watch('email')}
          onChange={(e) => setValue('email', e.target.value)}
        />
        <Input
          type="text"
          placeholder="National ID"
          value={watch('national_id')}
          onChange={(e) => setValue('national_id', e.target.value)}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white transition-all duration-500 ease-linear font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
