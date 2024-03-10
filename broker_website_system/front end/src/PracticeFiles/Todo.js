import { useState } from 'react';
import styles from './Style.module.css'
export default function Todo()
{  
    const [todo,settodo]=useState('');
    const [todolist,settodolist]=useState([]);
   const templist="";
   const  handleChange=(event)=>
    {
       settodo(event.target.value);
       templist=todo;
       todolist.push(templist);
       todo="";
     }
    const handleADD=(event)=>
{

    settodolist(todo);

}
            
    
   return(
    <div className={styles.todolistapp}>
        <div >
        <input onChange={handleChange} className={styles.tolistinput} type="text" placeholder="enter to do task's"></input>
        <button onClick={handleADD} className={styles.todoadd}>ADD</button>
        <h1>{todolist}</h1>
        </div>
        <button className={styles.todolistDelete}>delete</button>
    </div>

   );
}