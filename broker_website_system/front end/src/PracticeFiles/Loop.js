import './App.css';
import { useState } from "react";
import Button from "./Button"
export default function Loop()
{
    const [result,setResult]=useState('');
    
    const array=[1,2,3,4,5,6];
    const students=['haben','kibrom','millen','tadesse'];
    const loopfunction=()=>
    {
    
            
            
    return(
        <ul>
            {
 students.map((student)=>(
    <li>{student}</li>
 ))
            }  
                
        </ul>
       
    );

    }
    const depends=(prop)=>
    {
        console.log(prop);
        if(prop=="amharic")
        setResult("App-header");
    else
    setResult("mpme");
    }
    return(
        <div>
            {loopfunction()}
            <button  className={result} onClick={depends}>SwitchLanguage</button>
            <Button name="amharic"></Button>
           
        </div>
    );
}