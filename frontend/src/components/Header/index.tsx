import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import logoImage from '../../assets/logo.png'
import HeaderButton from './HeaderButton'

interface HeaderProps {
  registered: boolean
}

const Header: FC<HeaderProps> = ({ registered }) => {
  const navigation = useNavigate()
  return (
    <nav className="bg-[#111324] h-20 flex justify-between items-center px-8 lg:px-24">
      {/* Logo and Campaigns Manager Text linked to Home */}
      <a href="/" className="flex items-center h-full font-semibold">
        <img
          src={logoImage}
          alt="Email Campaign Logo"
          style={{ height: '100%' }}
        />
        <span
          className="text-white"
          style={{
            fontFamily: '"Graphik Web", Helvetica, sans-serif',
            fontSize: '18px',
            marginLeft: '-15px',
            position: 'relative',
            top: '2px'
          }}>
          Campaigns Manager
        </span>
      </a>

      {/* Mobile menu icon */}
      <button className="block lg:hidden p-2">
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Adjusted Centered Navigation Links */}
      <div className="hidden lg:flex flex-1 justify-end pr-10">
        {registered && (
          <ul
            className="flex space-x-6"
            style={{
              fontFamily: '"Graphik Web", Helvetica, sans-serif',
              fontSize: '17px',
              lineHeight: '1.25'
            }}>
            <li>
              <HeaderButton text="Upload" url="/upload" />
            </li>
            <li>
              <HeaderButton text="Send Emails" url="/send-emails" />
            </li>
          </ul>
        )}
      </div>

      {/* Logout Link Styled Similar to Login and Try it free */}
      {registered && (
        <div
          className="hidden lg:flex space-x-6 items-center cursor-pointer"
          onClick={() => {
            sessionStorage.removeItem('isLogin')
            navigation('/login')
            window.location.reload()
          }}>
          <a
            className="px-4 py-3 bg-[#51CFDB] text-[#111324] rounded hover:bg-[#3fa9ad] transition-colors duration-300 text-sm"
            style={{
              fontFamily: '"Graphik Web", Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '15px'
            }}>
            Logout
          </a>
        </div>
      )}

      {/* Sign Up and Login Links */}
      {!registered && (
        <div className="hidden lg:flex space-x-6 items-center">
          <HeaderButton text="Login" url="/login" />
          <a
            href="/register"
            className="px-4 py-3 bg-[#51CFDB] text-[#111324] rounded hover:bg-[#3fa9ad] transition-colors duration-300 text-sm"
            style={{
              fontFamily: '"Graphik Web", Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '15px'
            }}>
            Try it free
          </a>
        </div>
      )}
    </nav>
  )
}

export default Header
