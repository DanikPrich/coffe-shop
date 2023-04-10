
import HeaderSection from "../components/sections/HeaderSection/HeaderSection"
import FooterSection from "../components/sections/FooterSection/FooterSection"
import AboutSection from "../components/sections/AboutSection/AboutSection"
import GoodsSection from "../components/sections/GoodsSection/GoodsSection"

import aboutImage2 from '../img/about/about2.jpg'


function GoodsPage() {
  return(
    <>
      <HeaderSection headerText={"For your pleasure"}/>
      <AboutSection aboutImage={aboutImage2}/>
      <GoodsSection/>
      <FooterSection/>
    </>
  ) 
}

export default GoodsPage