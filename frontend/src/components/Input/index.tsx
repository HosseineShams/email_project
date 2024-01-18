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
  type = 'text',
  placeholder
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="mb-1 text-sm transition-all duration-500 ease-linear transform text-gray-500 focus:text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          'border border-gray-300 p-2 transition-all duration-500 ease-linear rounded-lg outline-none text-zinc-500 focus:text-gray-900',
          'focus:border-gray-800',
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
