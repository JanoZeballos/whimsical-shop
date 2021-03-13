import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom';

function Herosection() {
    return (
        <div className='container' id='inicio'>
            <div className='content'>
                <div className='items'>
                    <img className='animate__animated animate__fadeInDown animate__delay-1s logo' src='./images/icons/logo.png' alt='Logo' />
                    {/*<h1 className='animate__animated animate__fadeInDown animate__delay-1s'>Whimsical</h1>*/}
                    <h2>Tienda Online</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/shop" className="animate__animated animate__fadeIn animate__delay-2s animate__slow-2s ver_tienda">VER TIENDA</Link>
                </div>
            </div>
            <div className='hero-cont'>
                <img className='animate__animated animate__slideInRight animate__slower background' src='images/hero/modelo_2.jpg' alt='Modelo' />
            </div>
        </div>
    )
}

export default Herosection
