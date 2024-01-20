import { Route, Routes } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const UnRegisteredRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
export default UnRegisteredRoutes
