
import HeaderSection from "../components/sections/header-section/header-section"
import FooterSection from "../components/sections/footer-section/footer-section"
import AboutSection from "../components/sections/about-section/about-section"
import SearchSection from "../components/sections/search-section/search-section"
import GoodsSection from "../components/sections/goods-section/goods-section"


function CoffePage(props) {
  const {onNavigation} = props
  return(
    <>
      <HeaderSection onNavigation={onNavigation}/>
      <AboutSection/>
      <SearchSection/>
      <GoodsSection/>
      <FooterSection onNavigation={onNavigation}/>
    </>
  )
}

export default CoffePage