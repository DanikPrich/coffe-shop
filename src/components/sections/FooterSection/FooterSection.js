
import BeansLogo from '../../../img/beans/logo.svg'
import NavLinks from '../../NavLinks/NavLinks'

import './footerSection.scss'

function FooterSection(props) {
  return (
    <footer className='footer'>
      <NavLinks light={false}/>
      <img className='footer__img' src={BeansLogo} alt="beans logo" />
    </footer>
  )
}

export default FooterSection