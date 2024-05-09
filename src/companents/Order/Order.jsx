import React, { useState } from 'react'
import './order.css'
function Order({ render, Setrender }) {
    const [active, SetActive] = useState(1)
    let localDATA = JSON.parse(window.localStorage.getItem('locdata'))
    console.log(localDATA);
    function delFood(id) {
        Setrender(!render)
        window.localStorage.setItem('locdata', JSON.stringify(localDATA.filter((i) => i.id !== id)))
    }
    return (
        <div className='order darkblue'>
            <h2>Orders #05062008</h2>
            <div className="order_btn_wrapper">
                <button className={active === 1 ? 'order_btn active' : 'order_btn'} onClick={() => SetActive(1)}>Dine in</button>
                <button className={active === 2 ? 'order_btn active' : 'order_btn'} onClick={() => SetActive(2)}>Take away</button>
                <button className={active === 3 ? 'order_btn active' : 'order_btn'} onClick={() => SetActive(3)}>Delivery</button>
            </div>
            <ul className="order_ul">
                {
                    localDATA?.map((item) => (

                        <li className="order_li">
                            <div className="li_top">
                                <img src={item.img} alt="" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.price}som</p>
                                </div>
                                <span>{item.count}</span>
                                <p>{item.price * item.count} som</p>
                            </div>
                            <div className="li_bot">
                                <input type="text" />
                                <button onClick={() => delFood(item.id)}><i className='bi bi-trash'></i></button>
                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Order