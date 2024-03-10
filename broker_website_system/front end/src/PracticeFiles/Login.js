import React, { useState } from 'react';
import axios from 'axios';
import Homepage from './Homepage'

import './tt.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responseData,setresponseData]=useState(null);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8001/users');
       setresponseData(JSON.stringify(response.data));// Display the stringified response data in the alert
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forget Password?</div>
          <input name="submit" type="submit" value="Login" />
          <div className="signup_link">
            Not a Member ? <a href="signup.php">Signup</a>
          </div>
        </form>
        {error && <p>{error}</p>}
        <p>{responseData}jkh</p>
      </div>
    </div>
  );
};

export default Login;
