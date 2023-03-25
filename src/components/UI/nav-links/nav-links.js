
import CoffeBeans from '../../../img/beans/coffee-beans.svg'

import './nav-links.scss'

function NavLinks(props) {
  
  const light = props.light;
  const navStyle = !light ? {color: 'black'} : null
  const svgStyle = !light ? {filter: 'invert(1)'} : null
  
  return (

    <nav className='nav-links'>
      <img src={CoffeBeans} alt="coffe beans" className='nav-links__img' style={svgStyle}/>
      <ul className='nav-links__list'>
        <li>
          <a href="page1" style={navStyle}>
            Coffee house
          </a> 
        </li>
        <li>
          <a href="page2" style={navStyle}>
            Our coffee
          </a>
        </li>
        <li>
          <a href="page3" style={navStyle}>
            For your pleasure
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks