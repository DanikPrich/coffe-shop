import { NavLink } from 'react-router-dom'

import './goodsItem.scss'
import image from '../../img/goods/1.png'


function GoodsItem() {
  return (
    <NavLink className="goods-item" to="/goods/123">
      <img src={image} alt="coffe" />
      <span className='goods-item__title'>Solimo Coffee Beans 2 kg</span>
      <div className="goods-item__price">
        <span>10.73$</span>
      </div>
    </NavLink>
  )
}

export default GoodsItem
