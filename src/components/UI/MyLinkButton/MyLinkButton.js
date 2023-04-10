import { NavLink, useNavigate } from 'react-router-dom'

import './myLinkButton.scss'

const MyLinkButton = (props) => {

  const navigate = useNavigate();

  function goBackCondition() {
    if(props.to === "#") navigate(-1)
  }

  return (
    <NavLink to={props.to} className='my-button' onClick={goBackCondition} >
      {props.text}
    </NavLink>
  )
}

export default MyLinkButton