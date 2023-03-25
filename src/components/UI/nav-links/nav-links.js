
import CoffeBeans from '../../../img/beans/coffee-beans.svg'

import './nav-links.scss'

function NavLinks(props) {
  
  const light = props.light;
  const navStyle = !light ? {color: 'black'} : null
  const svgStyle = !light ? {filter: 'invert(1)'} : null
  
  const {onNavigation} = props;

  return (
    <nav className='nav-links'>
      <img src={CoffeBeans} alt="coffe beans" className='nav-links__img' style={svgStyle}/>
      <ul className='nav-links__list'>
        <li>
          <button href="#" style={navStyle} onClick={() => onNavigation('MainPage')}>
            Coffee house
          </button> 
        </li>
        <li>
          <button href="#" style={navStyle} onClick={() => onNavigation('CoffePage')}>
            Our coffee
          </button>
        </li>
        <li>
          <button href="#" style={navStyle} onClick={() => onNavigation('GoodsPage')}>
            For your pleasure
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks