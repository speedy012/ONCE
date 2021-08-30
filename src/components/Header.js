import '../styles/Header.css'

import React from 'react'
import burgericon from '../assests/images/menu3.png'
import logo from '../assests/logo/logo.svg'

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <div className="navbar">
        <a href="/">212.555.5555</a>
        <a href="/login" >Login</a>
        <img className="menu" src={burgericon} alt="menu-icon"/>
      </div>
    </div>
  )
}

export default Header
