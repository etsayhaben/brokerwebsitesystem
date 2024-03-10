
//first this is AutoContext.js
import { createContext } from "react";
export const AutoContext=createContext("");

// //then in order to use provide it in the upper or parent class
// //for example in App
// import {useState} from 'react'
// import { AutoContext } from "./Helpers/AutoContext";

// function App()
// {
//     const [isAuthenticated,setAuthenticated]=useState(false);
//     <AutoContext.Provider value={{isAuthenticated,setAuthenticated}}>
//         you can use the child class that you want to update and access teh 
//         value that is provided
//     </AutoContext.Provider>
// }
// //then inorder to use it in the class that we want for example
// //in login or header page
// import { useContext } from 'react';
// import { AutoContext } from './Helpers/AutoContext';
// function header()
// {
//     const  {setAuthenticated,isAuthenticated} = useContext(AutoContext);
// //then you can use ever where as you want 
// }

