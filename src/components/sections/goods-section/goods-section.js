
import GoodsItem from '../../UI/goods-item/goods-item'

import './goods-section.scss'


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