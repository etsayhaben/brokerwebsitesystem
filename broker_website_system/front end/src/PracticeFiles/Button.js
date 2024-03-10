import { useState } from "react";
import Style from './Style.css'
export default function Button(props)
{
const [background,change]=useState('');
    const changeBackground=(event)=>
    {
        if(event.target.id=='btnred')
        change('tored');
    else if(event.target.id=='btnyellow')
    change('toyellow'); 
 
    }
    return(
        <div>
<button className={background} id='btnred' onClick={changeBackground}>red</button>
        <button className={background} id='btnyellow' onClick={changeBackground}>yellow</button>
        </div>
        
    );
}