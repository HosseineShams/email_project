import { FC, ReactNode, useState } from 'react'

import MyContext from './MyContext'

interface MyProviderProps {
  children: ReactNode
}
const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<boolean>(
    !!sessionStorage.getItem('isLogin')
  )

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider
