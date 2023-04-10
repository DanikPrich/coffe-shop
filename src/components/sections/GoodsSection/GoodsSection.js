
import GoodsItem from '../../GoodsItem/GoodsItem'

import './goodsSection.scss'


function GoodsSection() {
  return(
    <>
      <section className="goods">
        <div className="container">
          <div className="goods-block">
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>
          </div>
        </div>
      </section>
    </>
  )
}

export default GoodsSection