import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register({ onRegister }) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    national_id: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        user: {
          username: userData.username,
          password: userData.password,
          email: userData.email,
        },
        national_id: userData.national_id,
      });
      console.log(response.data);
      onRegister(true);
      navigate('/upload');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" name="username" onChange={handleChange} />
        </div>
        <div
className="mb-4">
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" name="password" onChange={handleChange} />
</div>
<div className="mb-4">
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" onChange={handleChange} />
</div>
<div className="mb-4">
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="National ID" name="national_id" onChange={handleChange} />
</div>
<div className="flex items-center justify-between">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
Register
</button>
</div>
</form>
</div>
);
}

export default Register;