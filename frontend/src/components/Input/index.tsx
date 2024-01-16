import { FC, InputHTMLAttributes } from 'react'

const Input: FC<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  )
}
export default Input