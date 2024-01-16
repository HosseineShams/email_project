import React from 'react'

interface MyContextType {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const MyContext = React.createContext<MyContextType | null>(null)

export default MyContext
