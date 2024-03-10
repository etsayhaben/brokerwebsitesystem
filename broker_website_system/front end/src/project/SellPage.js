 import {useState} from 'react';
 import './BuyPage.css'
 import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Header from './Header';

 const SellPage=()=>
    {
        
   
            
            return(
                <div>
                         <Header/>
                        <h1 class='thisone'>what do you want to sell</h1>
               
                        <div class='section'>
           <Link to='/mobile_form'>
           <button>mobile</button>

           </Link>
           <Link to='/villa_form'>
           <button>home</button>

           </Link>
           <Link to='/car_form'>
           <button>electronics</button>

           </Link>
                
                </div>
            
                </div>
            );
     
       
            
    }
    export default SellPage;