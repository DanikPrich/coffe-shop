
import HeaderSection from "../components/sections/HeaderSection/HeaderSection"
import FooterSection from "../components/sections/FooterSection/FooterSection"
import AboutSection from "../components/sections/AboutSection/AboutSection"
import SearchSection from "../components/sections/SearchSection/SearchSection"
import GoodsSection from "../components/sections/GoodsSection/GoodsSection"

import aboutImage3 from '../img/about/about3.jpg'


function CoffePage() {
  return(
    <>
      <HeaderSection headerText={"Our Coffee"}/>
      <AboutSection aboutImage={aboutImage3}/>
      <SearchSection/>
      <GoodsSection/>
      <FooterSection />
    </>
  )
}

export default CoffePage