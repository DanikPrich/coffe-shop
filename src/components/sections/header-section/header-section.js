
import NavLinks from '../../UI/nav-links/nav-links'

import './header-section.scss'

function HeaderSection(props) {
  const {onNavigation, headerText} = props;

  return (
    <header className='header'>
      <div className="header__links">
        <NavLinks light={true} onNavigation={onNavigation}/>  
      </div>
      <h1>{headerText}</h1>
    </header>

  )
}

export default HeaderSection