import './bootstrap.min.css';
import './practice.css'
import Body from './Body'
import Form from './Form'
import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
function Practtice()
{
  const [fullName,SetFullName]=useState({firstName:'',middleName:'',lastName:''});
  const handlefirstName=(event)=>
  {
            
            SetFullName({firstName:event.target.value});
  }
  const handleNext=(event)=>
  {
    <Routes>
    <Route path="/next" element={<Form />} />
    </Routes>
    alert('i am in handle next');

  }
    return(
        <div className="container p-5 bg-body-tertiary border rounded-3 bg-white">
      <div className="center">
        <h1>Registration</h1>
        <form onSubmit='handleSubmit'>
          <div className="txt_field">
            
               <input
              type="text"
              name="text"
              value={SetFullName.firstName}
              onChagne={handlefirstName}
              required
          ></input>
           
            <span></span>
            <label>firstName</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              value="middleName"
              required
            />
            <span></span>
            <label>middle name</label>
          </div>

          <div className="txt_field">
            <input
              type="text"
              value='lastname'
              required
            />
            <span></span>
            <label>last name</label>
          </div>
          
          
      <nav>
      <Link to='/back' className=" register btn btn-outline-secondary" type="button">back</Link>
      <Link to='/next' onClick={handleNext} className=" register btn btn-outline-secondary" type="button">next</Link>
      </nav>
      <Routes>
          <Route path="/back" element={<Body />} />//this want to back.js
          <Route path="/next" element={<next />} />//this wants to next.js 
          
      </Routes>
          </form>
     
          
        </div>
      </div>
    
    );
   

}
export default Practtice;


