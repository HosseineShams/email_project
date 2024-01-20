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
        'text-white font-bold py-2 px-4 rounded-lg',
        'transition duration-300 transform',
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-purple-600 hover:bg-purple-700 hover:scale-105',
        'disabled:opacity-75'
      )}>
      {children}
    </button>
  )
}

export default Button
