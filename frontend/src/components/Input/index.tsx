import clsx from 'clsx'
import React from 'react'

type InputProps = {
  id?: string
  label?: string
  helperText?: string
  errorText?: string
  disabled?: boolean
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}

const InputComponent: React.FC<InputProps> = ({
  id,
  label,
  helperText,
  errorText,
  disabled,
  value,
  onChange,
  type,
  placeholder
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-lg transition duration-500 ease-in-out transform">
          {label}
        </label>
      )}
      <input
        type={type || 'text'}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          'border p-2 transition-all duration-500 ease-in-out',
          'transform hover:scale-105 focus:border-blue-500',
          disabled ? 'bg-gray-200' : 'bg-white',
          errorText ? 'border-red-500' : 'border-gray-300'
        )}
      />
      {helperText && !errorText && (
        <span className="text-sm text-gray-600">{helperText}</span>
      )}
      {errorText && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  )
}

export default InputComponent
