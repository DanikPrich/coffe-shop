
import './goods-item.scss'
import image from '../../../img/goods/1.png'


function GoodsItem() {
  return (
    <div className="goods-item">
      <img src={image} alt="coffe" />
      <span className='goods-item__title'>Solimo Coffee Beans 2 kg</span>
      <div className="goods-item__price">
        <span>10.73$</span>
      </div>
    </div>
  )
}

export default GoodsItem
