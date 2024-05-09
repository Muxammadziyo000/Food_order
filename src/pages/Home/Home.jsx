import React, { useState } from 'react'
import './home.css'
import Hometop from '../../companents/homeTop/Hometop';
import { foodData } from '../../data';
import Card from '../../companents/Cards/Card';
import Order from '../../companents/Order/Order';
function Home() {
    const [active, UseActive] = useState('milliy')
    let categories = []
    foodData.forEach((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category)
        }
    })
    const [val, SetVal] = useState('')
    const [render, Setrender] = useState(true)
    let locArray = []
    function fnFood(item) {
        Setrender(!render)
        if (window.localStorage.getItem('locdata')) {
            locArray = JSON.parse(window.localStorage.getItem('locdata'))

        }
        if (!locArray.find((i) => i.id === item.id)) {
            item.count = 1
            locArray.push(item)
            window.localStorage.setItem('locdata', JSON.stringify(locArray))
        } else {
            locArray.find((i) => i.id === item.id).count = locArray.find((i) => i.id === item.id).count + 1
            window.localStorage.setItem('locdata', JSON.stringify(locArray))
        }


    }
    return (
        <div className='home'>
            <div className="leftside_home">
                <Hometop SetVal={SetVal} />
                <ul className='home_ul'>
                    {
                        categories.map((item, index) => (
                            <li onClick={() => UseActive(item)} key={index} className={active == item ? 'home_ul_li active' : 'home_ul_li'}>{item}</li>
                        ))
                    }
                </ul>
                <hr className='home_types_underline' />


                <ul className='home_list'>
                    {
                        val.length > 0 ? foodData.filter((item) => item.title.toLowerCase().includes(val.toLowerCase())).map((item, index) => (
                            <li onClick={() => fnFood(item)} key={index} className='home_item'>
                                <Card item={item}></Card>
                            </li>
                        )) :
                            foodData.filter((i) => i.category == active).map((item, index) => (
                                <li onClick={() => fnFood(item)} key={index} className='home_item'>
                                    <Card item={item}></Card>
                                </li>
                            ))
                    }

                </ul>

            </div>

            <Order render={render} Setrender={Setrender} />
        </div>
    )
}

export default Home