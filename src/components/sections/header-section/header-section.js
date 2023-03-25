
import NavLinks from '../../UI/nav-links/nav-links'

import './header-section.scss'

function HeaderSection() {
  return (
    <header className='header'>
      <div className="header__links">
        <NavLinks light={true}/>  
      </div>
      <h1>Our Coffee</h1>
    </header>

  )
}

export default HeaderSection