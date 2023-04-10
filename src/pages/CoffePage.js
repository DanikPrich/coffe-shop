
import HeaderSection from "../components/sections/HeaderSection/HeaderSection"
import FooterSection from "../components/sections/FooterSection/FooterSection"
import AboutSection from "../components/sections/AboutSection/AboutSection"
import SearchSection from "../components/sections/SearchSection/SearchSection"
import GoodsSection from "../components/sections/GoodsSection/GoodsSection"


function CoffePage(props) {
  const {headerText} = props
  return(
    <>
      <HeaderSection headerText={headerText}/>
      <AboutSection aboutImage={props.aboutImage}/>
      <SearchSection/>
      <GoodsSection/>
      <FooterSection />
    </>
  )
}

export default CoffePage