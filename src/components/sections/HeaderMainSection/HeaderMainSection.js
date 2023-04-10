import NavLinks from '../../NavLinks/NavLinks'
import MyLinkButton from '../../UI/MyLinkButton/MyLinkButton'

import './headerMainSection.scss'

import BeansLogo from '../../../img/beans/logo.svg'

function HeaderMainSection(props) {


  return (
    <header className='header-main'>
      <div className="header-main__links">
        <NavLinks light={true}/>
      </div>
      <section className="hero">
        <div className='container'>
          <div className="hero__wrapper">
            <h1 className='hero__title'>Everything You Love About Coffee</h1>
            <img className='hero__img' src={BeansLogo} alt="beans logo" />  

            <div className='hero__subtitle'>
              <span>We makes every day full of energy and taste</span> <br />
              <span>Want to try our beans?</span>
            </div>

            <MyLinkButton text="More" to="/coffe"/>
          </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderMainSection