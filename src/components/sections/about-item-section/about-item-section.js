import BeansLogo from '../../../img/beans/logo.svg'

import AboutImg from '../../../img/about/about1.jpg'

import './about-item-section.scss'


function AboutItemSection() {
  return (
    <section className="about-item">
      <div className="container">
          <img className='about-item__photo' src={AboutImg} alt="" />
          <div className='about-item__wrapper'>
            <h2 className="about-item__title">About it</h2>
            <img className='about-item__img' src={BeansLogo} alt="beans logo" />
            <div className='about-text'>
              <div className="about-text__country">
                <span><b>Country:</b> Brasil</span>
              </div>
              <div className="about-text__descr">
                <span>
                  <b>Description: </b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
              <div className="about-text__price">
                <span><b>Price: </b></span>
                <span className="about-text__price_big">16.99$</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutItemSection
