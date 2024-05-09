import React from 'react'
import './card.css'
function Card({ item }) {
    return (
        <div className="cards">

            <div className='my_card darkblue '>
                <img src={item.img} alt="image" />
                <h1>{item.title}</h1>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default Card