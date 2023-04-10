
import HeaderSection from "../components/sections/HeaderSection/HeaderSection"
import FooterSection from "../components/sections/FooterSection/FooterSection"
import AboutItemSection from "../components/sections/AboutItemSection/AboutItemSection"


function GoodsItemPage(props) {
  const {headerText} = props

  return(
    <>
      <HeaderSection headerText={headerText}/>
      <AboutItemSection />
      <FooterSection/>
    </>
  )
}

export default GoodsItemPage