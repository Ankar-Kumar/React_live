import React from 'react'

export default function About() {
  return (
    <div>
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                    <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZZINI</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum excepturi aliquid pariatur similique, magnam repudiandae magni maiores itaque earum nulla incidunt quis fugiat voluptatum ad.</p>
                        <div className="about__btn">
                            <a href="#" className='btn btn-smart'>
                                READ MORE
                            </a>
                </div>
                </div>
                <div className="col-6">
                    <img src="/img/pizza.jpg" className='about__img' alt="gfer" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
