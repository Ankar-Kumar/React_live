import React from 'react'
import pizza1 from '../components/img/pizza1.png'
import pizza2 from '../components/img/pizza2.png'
import pizza3 from '../components/img/pizza3.png'
import pizza4 from '../components/img/pizza4.png'
import pizza5 from '../components/img/pizza5.png'
import pizza6 from '../components/img/pizza6.png'
function Price() {
  return (
    <div>
        <div className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza1} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza6} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza2} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza3} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza4} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza5} alt="pizza" />
                            </div>
                            <h1 className="price__heading">
                                Pizza Margeriitta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam architecto accusantium facere in ad?
                            </p>
                            <p className="price__rs">$35.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price