
import HeaderSection from "../components/sections/HeaderSection/HeaderSection"
import FooterSection from "../components/sections/FooterSection/FooterSection"
import AboutSection from "../components/sections/AboutSection/AboutSection"
import GoodsSection from "../components/sections/GoodsSection/GoodsSection"


function GoodsPage(props) {
  const {headerText} = props

  return(
    <>
      <HeaderSection headerText={headerText}/>
      <AboutSection aboutImage={props.aboutImage}/>
      <GoodsSection/>
      <FooterSection/>
    </>
  )
}

export default GoodsPage