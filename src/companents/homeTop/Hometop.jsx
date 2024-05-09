import React from 'react'
import './hometop.css';
function Hometop({ SetVal }) {
    return (
        <div className='home_top lightblue'>
            <div className="home_top_content">
                <h1 >Jaegar Resto</h1>
                <p>Saturday, 3 May 2024</p>
            </div>
            <div className="div_input lightgray">
                <i className="bi bi-search"></i>
                <input onChange={(e) => SetVal(e.target.value)} type="text" placeholder='Search for food, coffe, etc..' />
            </div>
        </div>
    )
}

export default Hometop