
import HeaderSection from "../components/sections/header-section/header-section"
import FooterSection from "../components/sections/footer-section/footer-section"
import AboutSection from "../components/sections/about-section/about-section"
import GoodsSection from "../components/sections/goods-section/goods-section"


function GoodsPage(props) {
  const {onNavigation, headerText} = props

  return(
    <>
      <HeaderSection onNavigation={onNavigation} headerText={headerText}/>
      <AboutSection aboutImage={props.aboutImage}/>
      <GoodsSection/>
      <FooterSection onNavigation={onNavigation}/>
    </>
  )
}

export default GoodsPage