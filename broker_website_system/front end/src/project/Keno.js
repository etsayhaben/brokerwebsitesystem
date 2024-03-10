import React,{ Component, useContext } from 'react';
import { useState } from 'react';
import UseContext from './UseContext';
export const ownerContext=React.createContext();//we declare a contect variable
//this helps to pass data from parent to child.
function Namelist()
{
   const  [list,setList]=useState(["haben","berhe","gebru"]);
   const [name,setName]=useState("fryat");
   let placeholder="enter a name";

   const addtolist=()=>
   {
          setList(...list,name);
          console.log(list);
          setName(" ");
            }
  return(
    <div>
      <ul>
        {list}
      </ul>
      <input onChange={(event)=>setName(event.target.value)}placeholder={placeholder}></input>
      <button onClick={addtolist}>add a name</button>
     
    </div>
  );
}
export default function Keno(){
  return(
    <>
<Namelist/>
<ownerContext.Provider value="haben">
   <UseContext/>
</ownerContext.Provider>
</>
    );

}


 