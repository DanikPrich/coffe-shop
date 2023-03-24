
import CoffeBeans from '../../../img/beans/coffee-beans.svg'

import './nav-links.scss'

function NavLinks() {
  
  
  return (
    <nav className='nav-links'>
      <img src={CoffeBeans} alt="coffe beans" className='nav-links__img'/>
      <ul className='nav-links__list'>
        <li>
          <a href="page1">
            Coffee house
          </a> 
        </li>
        <li>
          <a href="page2">
            Our coffee
          </a>
        </li>
        <li>
          <a href="page3">
            For your pleasure
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks