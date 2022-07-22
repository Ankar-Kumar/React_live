import React from 'react'
import logo from '../components/img/logo.png'
function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbar__text">
                <div className="logo">
                   <img src={logo} alt="logo" /> 
                </div>
                <ul className='navbar__ul'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">Menu</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar