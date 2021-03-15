//import React, { useState, useEffect } from 'react';
import React from 'react';
//import { Link } from 'react-router-dom';
import './Carrito.css';

function Carrito() {

    /*
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

  /*console.log(button); onClick={closeMobileMenu}*/

  return (
    <>
    <div className='shop_left'>
        <table>
            <tr className='header'>
                <th>Producto</th>
                <th></th>
                <th>Talla</th>
                <th>Color</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th></th>
            </tr>
            <tr className='productos'>
                <td>Producto 1</td>
                <td><img className='producto_img' src='./images/hero/modelo_1.jpg' alt='' /></td>
                <td>XL</td>
                <td>Azul</td>
                <td>1</td>
                <td>$399,99</td>
                <td>$399,99</td>
                <td>X</td>
            </tr>
            <tr className='productos'>
                <td>Producto 2</td>
                <td><img className='producto_img' src='./images/hero/modelo_2.jpg' alt='' /></td>
                <td>X</td>
                <td>Naranja</td>
                <td>2</td>
                <td>$299,99</td>
                <td>$599,99</td>
                <td>X</td>
            </tr>
            <tr className='productos'>
                <td>Producto 3</td>
                <td><img className='producto_img' src='./images/hero/modelo_3.jpg' alt='' /></td>
                <td>L</td>
                <td>Gris</td>
                <td>1</td>
                <td>$599,99</td>
                <td>$599,99</td>
                <td>X</td>
            </tr>
            <tr className='productos'>
                <td>Producto 4</td>
                <td><img className='producto_img' src='./images/hero/modelo_4.jpg' alt='' /></td>
                <td>M</td>
                <td>Violeta</td>
                <td>1</td>
                <td>$399,99</td>
                <td>$399,99</td>
                <td>X</td>
            </tr>
            <tr className='productos'>
                <td>Producto 5</td>
                <td><img className='producto_img' src='./images/hero/modelo_5.jpg' alt='' /></td>
                <td>L</td>
                <td>Gris</td>
                <td>1</td>
                <td>$599,99</td>
                <td>$599,99</td>
                <td>X</td>
            </tr>
            <tr>
                <a className='link_volver' href='/shop'>
                    <td><h3 className='volver'><img className='flecha' src='./images/icons/arrow.png' alt='Flecha' />VOLVER A LA TIENDA</h3></td>
                </a>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='total'><h3>Total: $5999,99</h3></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div className='shop_right'>
        <h1>Lado Derecho</h1>
    </div>
    </>
  );
}

export default Carrito;