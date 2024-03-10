import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageUploadForm from './ImageUploadForm';
import Header from './Header';
import { useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
 const [formIndex, setFormIndex] = useState(0);
 const [user, customerInfo]=useState({
  firstname:'',
  middlename:'',
lastname:'',
 currentworeda:'',
 currentcity:'',
 housenumber:'',
 phonenumber:'',
 email:'',
confirmpassword:'',
password:''});
const [status,setStatus]=useState('false');
const [error,setError]=useState();
const navigate = useNavigate();

//  const handleBack = () => {
//     if (formIndex > 0) {
//       setFormIndex(formIndex - 1);
//     }
//  };
 const handleNext = () => {
  
  if (formIndex < 3) {
    setFormIndex(formIndex + 1);
    
  }
};
//to insert users data into database
const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    console.log(user);
    const response = await axios.post('http://localhost:7000/add_customer',
     user
  ); alert("successfully registered");

     console.log(response.data)
    navigate('/');// Log the response from the backend
    // Handle successful login (e.g., redirect to another page)
  } catch (error) {
    console.error('Error:', error);
    setError('email already exists');
  }
};

const handlefirstName=(event)=>
{
  customerInfo({...user,firstname:event.target.value})
  setStatus(true);
}
const handlemiddlename=(event)=>
{
  customerInfo({...user,middlename:event.target.value})
  setStatus(true)
}
const handlelastname=(event)=>
{
  customerInfo({...user,lastname:event.target.value})
  setStatus(true);
}
const handlecurrentworeda=(event)=>
{
  customerInfo({...user,currentworeda:event.target.value})
  setStatus(true);
}
const handlecurrentcity=(event)=>
{
  customerInfo({...user,currentcity:event.target.value})
  setStatus(true);
}
const handlehousenumber=(event)=>
{
  customerInfo({...user,housenumber:event.target.value})
  setStatus(true);
}
const handleemail=(event)=>
{
  customerInfo({...user,email:event.target.value})
  setStatus(true);
}
const handlepassword=(event)=>
{
  customerInfo({...user,password:event.target.value})
  setStatus(true);
}

const handleconfirmpassword=(event)=>
{
  if(user.password===user.confirmpassword)
  setStatus(true);
  console.log("correct");
}

const handlephonenumber=(event)=>
{
  customerInfo({...user,phonenumber:event.target.value})
}

 return (
    <div className="App">
      <Header/>
      <div class='registersection'>
      <h1>Registration
      </h1>
      {formIndex === 0 && (
        <div>
          <h2>fill your profile</h2>
          <input size='100' type="text" onChange={handlefirstName} placeholder="First Name" required/>
          <input type="text" onChange={handlemiddlename}placeholder="middle name" required/>
          <input type="email" onChange={handlelastname} placeholder="last name" required/>
        </div>
      )}
      {formIndex === 1 && (
        <div>
          <h2> current location</h2>
          <input size='100' type="text" onChange={handlecurrentworeda} placeholder="current woreda " required />
          <input type="text" onChange={handlecurrentcity} placeholder="current city" required
          />
          <input type="text" onChange={handlehousenumber} placeholder="house number" required/>
          <input type="text" onChange={handlephonenumber} placeholder="phonenumber" required/>

        </div>
      )}
         {
         formIndex === 2 && (
        <div>
             <h2>Create your account</h2>
          <input size='100' type="email" onChange={handleemail} placeholder="email"required/>
          <input type="password" onChange={handlepassword} placeholder="password" required/>
          <input type="password" onChange={handleconfirmpassword}  placeholder="confirm password" required/>
          {/* <ImageUploadForm /> */}

        </div>
      )}
      {   
      formIndex <2 &&
      (
        <div>
          <button onClick={handleNext}>Next</button>
          </div>



      )
  }
  
     
 { formIndex===2 && (
         <div>              
          <button onClick={handlesubmit}>submit</button>
         </div>
      )
      }
      <p color='red'>{error}</p>
      
    </div>
    </div>
 );
};

export default Signup;