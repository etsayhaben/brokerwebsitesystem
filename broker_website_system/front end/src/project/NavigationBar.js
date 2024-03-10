import { Route, Link } from 'react-router-dom';
import './NavigationBarCss.css'
import SellButton from './SellButton';

export default function NavigationBar()
{
 return(
    <header class="navbar">
 <div class="logo">
    <img src="logo.png" alt="Logo" />
 </div>
 <nav class="navigation">
    <ul>
      <li><a href="#">Buy</a></li>
      <li><Link to="/SellButton">Sell</Link></li>
      <li><input type="text" placeholder="Search" /></li>
      <li><button type="submit">Search</button></li>
      <li><a href="sign.html">Login</a></li>    </ul>
 </nav>
</header>

 );
}