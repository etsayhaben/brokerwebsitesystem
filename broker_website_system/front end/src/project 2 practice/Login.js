import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import './Login.css'
// import './tt.css';
const Login = () => {
  const [customer, loginInfo] = useState({
    email: '',
    password: '',
  });

  

  const handleEmailChange = (e) => {
    loginInfo({ ...customer, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    loginInfo({ ...customer, password: e.target.value });
  };

  const authorization = async (event) => {
    
              alert("this is from autorization");
  };

  return (
    <div className="container">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={authorization}>
          <div className="txt_field">
            <input
              type="text"
              name="text"
              // value={customer.email}
              onChange={handleEmailChange}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              // value={customer.password}
              onChange={handlePasswordChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forget Password?</div>
          <input name="submit" type="submit" value="Login" />

          <div>
             <button>create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
