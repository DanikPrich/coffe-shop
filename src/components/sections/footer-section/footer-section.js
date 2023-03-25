
import BeansLogo from '../../../img/beans/logo.svg'
import NavLinks from '../../UI/nav-links/nav-links'

import './footer-section.scss'

function FooterSection() {
  return (
    <footer className='footer'>
      <NavLinks light={false}/>
      <img className='footer__img' src={BeansLogo} alt="beans logo" />
    </footer>
  )
}

export default FooterSection