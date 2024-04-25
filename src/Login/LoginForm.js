// LoginForm.js

import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import '../Login/LoginForm.css';
function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user exists in local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === formData.username && user.password === formData.password) {
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='Loginform'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          className='input'
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className='input'
        />
        <button type="submit"
        className='btnLogin'
        >Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
