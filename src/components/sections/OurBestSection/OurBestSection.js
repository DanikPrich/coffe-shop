import GoodsItem from '../../GoodsItem/GoodsItem'

import './ourBestSection.scss'


function OurBestSection() {
  return (
    <section className="our-best">
      <div className="container">
        <h2 className="our-best__title">
          Our best
        </h2>
        <div className="our-best__items goods-items">
          <GoodsItem/>
          <GoodsItem/>
          <GoodsItem/>
        </div>
      </div>
    </section>
  )
}

export default OurBestSection
