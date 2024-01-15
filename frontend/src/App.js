import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import FileUpload from './components/FileUpload';
import EmailSender from './components/EmailSender';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (status) => {
    setIsRegistered(status);
  };

  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-blue-300" to="/">Home</Link>
            </li>
            {!isRegistered && (
              <li>
                <Link className="hover:text-blue-300" to="/register">Register</Link>
              </li>
            )}
            {isRegistered && (
              <>
                <li>
                  <Link className="hover:text-blue-300" to="/upload">Upload</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-300" to="/send-emails">Send Emails</Link>
                </li>
              </>
            )}
            <li>
              <Link className="hover:text-blue-300" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register onRegister={handleRegistration} />} />
          <Route path="/upload" element={isRegistered ? <FileUpload /> : <Home />} />
          <Route path="/send-emails" element={isRegistered ? <EmailSender /> : <Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
