import NavLinks from '../../UI/nav-links/nav-links'
import MyButton from '../../UI/my-button/my-button'

import './header-main-section.scss'

import BeansLogo from '../../../img/beans/logo.svg'

function HeaderMainSection() {
  return (
    <header className='header-main'>
      <NavLinks/>
      <section className="hero">
        <div className='container'>
          <div className="hero__wrapper">
            <h1 className='hero__title'>Everything You Love About Coffee</h1>
            <img className='hero__img' src={BeansLogo} alt="beans logo" />  

            <div className='hero__subtitle'>
              <span>We makes every day full of energy and taste</span> <br />
              <span>Want to try our beans?</span>
            </div>

            <MyButton text="More"/>
          </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderMainSection