import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  /*console.log(button);*/

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            {/*<i className={click ? 'fas fa-times' : 'fas fa-bars'} />*/}
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/Shop' className='nav-links' onClick={closeMobileMenu}>
                    Inicio
                </Link>
                </li>
                {button ? 
                <li>
                  <div className='dropdown'>
                    <button className="dropbtn">PRODUCTOS</button>
                    <div className='dropdown-content'>
                      <Link to="/">Remeras</Link>
                      <Link to="/">Buzos</Link>
                      <Link to="/">Jeans</Link>
                      <Link to="/">Conjuntos</Link>
                    </div>
                  </div>
                </li>
                :
                <>
                <li className='nav-item'>
                  <a className='nav-links' href="/" onClick={closeMobileMenu}>Productos</a>
                </li>
                </>
                }
                <li className='nav-item'>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Contacto
                </a>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;