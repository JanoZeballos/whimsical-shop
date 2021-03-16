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
    <div className='container_shop'>
    <div className='shop_left'>
        <div className='seccion_tabla'>
        <table>
            <tr className='header'>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Talla</th>
                <th>Color</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>¿Eliminar?</th>
            </tr>
            <tr className='productos'>
                <td>Producto 1</td>
                <td><img className='producto_img' src='./images/hero/modelo_1.jpg' alt='' /></td>
                <td>XL</td>
                <td>Azul</td>
                <td>1</td>
                <td>$399,99</td>
                <td>$399,99</td>
                <td><button className='eliminar'>X</button></td>
            </tr>
            <tr className='productos'>
                <td>Producto 2</td>
                <td><img className='producto_img' src='./images/hero/modelo_2.jpg' alt='' /></td>
                <td>X</td>
                <td>Naranja</td>
                <td>2</td>
                <td>$299,99</td>
                <td>$599,99</td>
                <td><button className='eliminar'>X</button></td>
            </tr>
            <tr className='productos'>
                <td>Producto 3</td>
                <td><img className='producto_img' src='./images/hero/modelo_3.jpg' alt='' /></td>
                <td>L</td>
                <td>Gris</td>
                <td>1</td>
                <td>$599,99</td>
                <td>$599,99</td>
                <td><button className='eliminar'>X</button></td>
            </tr>
            <tr className='productos'>
                <td>Producto 4</td>
                <td><img className='producto_img' src='./images/hero/modelo_4.jpg' alt='' /></td>
                <td>M</td>
                <td>Violeta</td>
                <td>1</td>
                <td>$399,99</td>
                <td>$399,99</td>
                <td><button className='eliminar'>X</button></td>
            </tr>
            <tr className='productos'>
                <td>Producto 5</td>
                <td><img className='producto_img' src='./images/hero/modelo_5.jpg' alt='' /></td>
                <td>L</td>
                <td>Gris</td>
                <td>1</td>
                <td>$599,99</td>
                <td>$599,99</td>
                <td><button className='eliminar'>X</button></td>
            </tr>
        </table>
        </div>
        <div className='seccion_total'>
          <h3 className='total'>Total: $5999,99</h3>
          <button className='link_volver'>
            <h3 className='volver'><img className='flecha' src='./images/icons/arrow.png' alt='Flecha' />VOLVER A LA TIENDA</h3>
          </button>
        </div>
    </div>
    <div className='shop_right'>
        <h1 className='metodos_de_pago' >Metodos de pago</h1>
        <div className='container_pagos' >
            <h3 className='subtitulo'>Seleccione un metodo de pago:</h3>
            <h3>Mercado Pago</h3>
            <div className='linea'></div>
            <div className='center'>
            <label for='mercado_pago'>
              <input className='check' type='radio' id='mercado_pago' name='pagos' value='mercado_pago' />
              <img className='iconos_pagos' src='./images/icons/mercado_pago.png' alt='MercadoPago' />
            </label>
            </div>
            <h3>Tarjetas</h3>
            <div className='linea'></div>
            <label for='tarjetas'>
              <input className='check' type='radio' id='tarjetas' name='pagos' value='tarjetas' />
              <img className='iconos_pagos' src='./images/icons/tarjetas.png' alt='Tarjetas' />
            </label>
            <h3>Transferencia Bancaria</h3>
            <div className='linea'></div>
            <label for='banco'>
              <input className='check' type='radio' id='banco' name='pagos' value='banco' />
              <img className='banco' src='./images/icons/banco.png' alt='Banco' />
            </label>
        </div>
        <button className='btn_compra' >Realizar compra</button>
    </div>
    </div>
  );
}

export default Carrito;