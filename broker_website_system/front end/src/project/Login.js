import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';
import { useContext } from 'react';
import { AutoContext } from './Helpers/AutoContext';

import { Link } from "react-router-dom";

import './Login.css'
import './tt.css';

const Login = () => {
  const [error, setError] = useState('');
  const  {setAuthenticated} = useContext(AutoContext);
  const [customer, loginInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailChange = (e) => {
    loginInfo({ ...customer, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    loginInfo({ ...customer, password: e.target.value });
  };

  const authorization = async (event) => {
    try {
      event.preventDefault();

      console.log(customer);

        // if(customer.email==='haben123' && customer.password==='haben123');
        // navigate('/adminpage');

      const response = await axios.post('http://localhost:8000/login', customer);
      console.log('Response Data:', response.data);
      const origin = location.state?.origin || new URLSearchParams(location.search).get('origin');

      if (response.data.success === true) {
        setAuthenticated(true);
        // Check the origin from location state or query parameter
  
        // Redirect based on the origin
        
        switch (origin) {
          case 'sell':
            navigate('/sell',{state:{setAuthenticated,customer}});
            break;
          case 'buy':
            navigate('/buy');
            break;
          case 'about':
            navigate('/about');
            break;
      default:
             navigate('/');
        }
      } else {
        console.error('Login Error:', response.data.error);
        alert('You are not authorized.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError("incorrect username or password");
      // Handle other types of errors, if any
    }
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
              value={customer.email}
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
              value={customer.password}
              onChange={handlePasswordChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forget Password?</div>
          <input name="submit" type="submit" value="Login" />

          <div>
            <Link to='/signup'> <button>create account</button></Link>
          </div>
        </form>
        {error && <p class='error'>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
