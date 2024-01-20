import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MyContext from '../components/Context/MyContext'
import Header from '../components/Header'
import RegisteredRoutes from './RegisteredRoutes'
import UnRegisteredRoutes from './UnRegisteredRoutes'

const Routes = () => {
  const context = useContext(MyContext)
  console.log(context?.state)

  return (
    <Router>
      <Header registered={!!context?.state} />
      {context?.state ? <RegisteredRoutes /> : <UnRegisteredRoutes />}
    </Router>
  )
}
export default Routes
