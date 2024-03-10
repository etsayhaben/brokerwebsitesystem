import About from "./About";
import Donate from "./Donate";
import Login from './Login'
import Tnx from "./Tnx";
import './Homepage.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';


export default function NavBar()
{
    const navigate = useNavigate();

    return(
        
        <div class="navigation">
           <button >sell</button>
           <button>buy</button>
           <button>about</button>
           
            navigate('/login';)
           
            <Login/>
            
            </div>

    );

}