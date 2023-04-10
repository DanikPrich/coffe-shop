import { NavLink } from 'react-router-dom'

import './myLinkButton.scss'

function MyLinkButton(props) {
  return (
    <NavLink to={props.to} className='my-button'>
      {props.text}
    </NavLink>
  )
}

export default MyLinkButton