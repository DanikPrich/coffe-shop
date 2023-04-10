
import { NavLink } from 'react-router-dom';

import CoffeBeans from '../../img/beans/coffee-beans.svg'

import './navLinks.scss'

function NavLinks(props) {
  
  const light = props.light;
  
  const navStyle = !light ? {color: 'black'} : null
  const svgStyle = !light ? {filter: 'invert(1)'} : null
  
  return (
    <nav className='nav-links'>
      <img src={CoffeBeans} alt="coffe beans" className='nav-links__img' style={svgStyle}/>
      <ul className='nav-links__list'>
        <li>
          <NavLink to="/" style={navStyle}>
            Coffee house
          </NavLink> 
        </li>
        <li>
          <NavLink to="/coffe" style={navStyle}>
            Our coffee
          </NavLink>
        </li>
        <li>
          <NavLink to="/goods" style={navStyle}>
            For your pleasure
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks