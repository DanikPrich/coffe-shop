
import HeaderSection from "../../components/sections/header-section/header-section"
import FooterSection from "../../components/sections/footer-section/footer-section"
import AboutSection from "../../components/sections/about-section/about-section"
import SearchSection from "../../components/sections/search-section/search-section"
import GoodsSection from "../../components/sections/goods-section/goods-section"


function CoffePage() {
  return(
    <>
      <HeaderSection/>
      <AboutSection/>
      <SearchSection/>
      <GoodsSection/>
      <FooterSection/>
    </>
  )
}

export default CoffePage