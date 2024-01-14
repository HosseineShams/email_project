import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    national_id: '',
  });

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
      // Handle response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <input type="text" name="national_id" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
