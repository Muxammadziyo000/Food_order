import React, { useState } from 'react'
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './img/Logo.svg';
function Header() {
    // const [active, SetActive] = useState('/')
    const location = useLocation().pathname
    return (
        <header className='header darkblue'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <ul className='header_ul'>
                <li className={location == '/' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to=''>
                        <i className="bi bi-house "></i>
                    </Link>
                </li>
                <li className={location == '/persent' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to='/persent'>
                        <i className="bi bi-percent"></i>
                    </Link>
                </li>
                <li className={location == '/chart' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to='/chart'>
                        <i class="bi bi-pie-chart"></i>
                    </Link>
                </li>
                <li className={location == '/message' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to='/message'>
                        <i class="bi bi-envelope"></i>
                    </Link>
                </li>
                <li className={location == '/bell' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to='/bell'>
                        <i class="bi bi-bell"></i>
                    </Link>
                </li>
                <li className={location == '/settings' ? 'header_ul_li actives' : 'header_ul_li'}>
                    <Link to='/settings'>
                        <i class="bi bi-gear"></i>
                    </Link>
                </li>

            </ul>
        </header>
    )
}

export default Header