import BeansLogo from '../../../img/beans/logo.svg'

import './about-main-section.scss'


function AboutMainSection() {
  return (
    <section className="about-us">
      <div className="container">
        <div className='about-us__wrapper'>
          <h2 className="about-us__title">About Us</h2>
          <img className='about-us__img' src={BeansLogo} alt="beans logo" />
          <span className="about-us__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            <br /><br />
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </span>
        </div>
      </div>
    </section>
  )
}

export default AboutMainSection
