
import HeaderSection from "../components/sections/header-section/header-section"
import FooterSection from "../components/sections/footer-section/footer-section"
import AboutItemSection from "../components/sections/about-item-section/about-item-section"


function GoodsItemPage(props) {
  const {onNavigation, headerText} = props

  return(
    <>
      <HeaderSection onNavigation={onNavigation} headerText={headerText}/>
      <AboutItemSection />
      <FooterSection onNavigation={onNavigation}/>
    </>
  )
}

export default GoodsItemPage