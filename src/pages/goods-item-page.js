
import HeaderSection from "../components/sections/header-section/header-section"
import FooterSection from "../components/sections/footer-section/footer-section"
import AboutSection from "../components/sections/about-section/about-section"
import SearchSection from "../components/sections/search-section/search-section"
import GoodsSection from "../components/sections/goods-section/goods-section"
import AboutItemSection from "../components/sections/about-item-section/about-item-section"


function GoodsItemPage(props) {
  const {onNavigation} = props

  return(
    <>
      <HeaderSection onNavigation={onNavigation}/>
      <AboutItemSection/>
      <FooterSection onNavigation={onNavigation}/>
    </>
  )
}

export default GoodsItemPage