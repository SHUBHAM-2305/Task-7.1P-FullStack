import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import '../styles/Login.css'; 
import { FaUser , FaLock } from 'react-icons/fa'; // Importing icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      console.log('Logged in successfully');
      navigate('/');  // Navigate to the home page after successful login
    } catch (error) {
      console.error('Error logging in', error);
      alert(`${error.code}: ${error.message}`);  // Display detailed error message
    }
  };
  

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <FaUser  className="input-icon" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="login-button">Login</button>
        
        <span className="sign-up-link" onClick={() => navigate('/signup')}>
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default Login;