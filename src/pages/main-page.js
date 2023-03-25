import HeaderMainSection from '../components/sections/header-main-section/header-main-section'
import AboutMainSection from '../components/sections/about-main-section/about-main-section'
import OurBestSection from '../components/sections/our-best-section/our-best-section'
import FooterSection from '../components/sections/footer-section/footer-section'


function MainPage(props) {
  const {onNavigation} = props

  return (
    <>
      <HeaderMainSection onNavigation={onNavigation}/>
      <AboutMainSection/>
      <OurBestSection/>
      <FooterSection onNavigation={onNavigation}/>
    </>
  )
}

export default MainPage 