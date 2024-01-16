import { FC } from 'react'

import HeaderButton from './HeaderButton'

interface HeaderProps {
  registered: boolean
}
const Header: FC<HeaderProps> = ({ registered }) => {
  return (
    <nav className="bg-gray-400 p-4 text-whixte">
      <ul className="flex space-x-4">
        <li>
          <HeaderButton text="Home" url="/" />
        </li>
        <li className={registered ? 'hidden' : ''}>
          <HeaderButton text="Register" url="/register" />
        </li>
        <li className={registered ? '' : 'hidden'}>
          <HeaderButton text="Upload" url="/upload" />
        </li>
        <li className={registered ? '' : 'hidden'}>
          <HeaderButton text="Send Emails" url="/send-emails" />
        </li>
        <li>
          <HeaderButton text="About" url="/about" />
        </li>
      </ul>
    </nav>
  )
}
export default Header
