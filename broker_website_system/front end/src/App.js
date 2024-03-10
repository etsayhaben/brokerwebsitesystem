import logo from './logo.svg';
import './App.css';
import HomePage from './project/HomePage';
import SellPage from './project/SellPage';
import Signup from './project/Signup';

import Donate from './project 2 practice/Donate';
import About from './project 2 practice/About';
import Tnx from './project 2 practice/Tnx';
import Login from './project 2 practice/Login';
import NavBar from './project 2 practice/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <Login/>
       <NavBar/>
       <Router>
        <Routes>     
             <Route path="/login" element={<Login/>} />
        </Routes>
       </Router>
         
       <Link to='/login'>
            <button>login</button>
            </Link>

     <div class='pages'>
                <Donate/>
                <About/>
                <Tnx/> 

            </div> */}
            {/* <HomePage/> */}
            {/* <SellPage/> */}
            
            {/* <Signup/> */}
            {/* <Login/> */}
       </div> 
       
  );
}

export default App;
