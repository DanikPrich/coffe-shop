import BeansLogo from '../../../img/beans/logo.svg'

// import AboutImg from '../../../img/about/about2.jpg'

import './about-section.scss'


function AboutSection(props) {
  const AboutImg = props.aboutImage
  return (
    <section className="about">
      <div className="container">
          <img className='about__photo' src={AboutImg} alt="" />
          <div className='about__wrapper'>
            <h2 className="about__title">About our goods</h2>
            <img className='about__img' src={BeansLogo} alt="beans logo" />
            <span className='about__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br/> <br/>
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. <br/>
              As greatly removed calling pleased improve an. <br/> 
              Last ask him cold feel <br/>
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </span>
          </div>
      </div>
    </section>
  )
}

export default AboutSection
