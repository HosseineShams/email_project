import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        'px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform',
        'rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 hover:scale-105',
        'disabled:opacity-75'
      )}>
      {children}
    </button>
  )
}

export default Button
