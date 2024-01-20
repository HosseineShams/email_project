// routes/RegisteredRoutes.tsx
import { Route, Routes } from 'react-router-dom'

import EmailSender from '../pages/EmailSender'
import FileUpload from '../pages/FileUpload'
import Home from '../pages/Home'

const RegisteredRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<FileUpload />} />
      <Route path="/send-emails" element={<EmailSender />} />
    </Routes>
  )
}

export default RegisteredRoutes

// import { Route, Routes } from 'react-router-dom'

// // import About from '../pages/About'
// import EmailSender from '../pages/EmailSender'
// import FileUpload from '../pages/FileUpload'
// import Home from '../pages/Home'

// const RegisteredRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/upload" element={<FileUpload />} />
//       <Route path="/send-emails" element={<EmailSender />} />
//       {/* <Route path="/about" element={<About />} /> */}
//     </Routes>
//   )
// }
// export default RegisteredRoutes
