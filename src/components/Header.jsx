import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
        <div className="banner">
            <Navbar/>
           <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque voluptatum dolore quia reiciendis molestiae perspiciatis suscipit aliquam ipsum veniam ex!</p>
                        <div className="banner__btn">
                            <a href="#"className='btn btn-smart'>
                                DELIVERY NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Header