import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeaderButtonProps {
  text: string
  url: string
}
const HeaderButton: FC<HeaderButtonProps> = ({ text, url }) => {
  return (
    <Link
      className="hover:text-blue-600 text-blue-300 transition-all duration-500 ease-linear"
      to={url}>
      {text}
    </Link>
  )
}
export default HeaderButton
