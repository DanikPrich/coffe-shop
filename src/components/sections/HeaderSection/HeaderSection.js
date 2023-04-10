
import NavLinks from '../../NavLinks/NavLinks'

import './headerSection.scss'

function HeaderSection(props) {
  const {headerText} = props;

  return (
    <header className='header'>
      <div className="header__links">
        <NavLinks light={true}/>  
      </div>
      <h1>{headerText}</h1>
    </header>

  )
}

export default HeaderSection