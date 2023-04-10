
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
          <button href="#" style={navStyle}>
            Coffee house
          </button> 
        </li>
        <li>
          <button href="#" style={navStyle}>
            Our coffee
          </button>
        </li>
        <li>
          <button href="#" style={navStyle}>
            For your pleasure
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks