//import React from 'react'
import React, { useState } from 'react';
import './Tienda.css'
import Select from 'react-select'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import { Link } from 'react-router-dom';

function Tienda() {

    const optionsRemeras = [
        { value: 'remera1', label: 'Remera Estilo 1' },
        { value: 'remera2', label: 'Remera Estilo 2' },
        { value: 'remera3', label: 'Remera Estilo 3' }
    ]

    const optionsCamperas = [
        { value: 'campera1', label: 'Campera Estilo 1' },
        { value: 'campera2', label: 'Campera Estilo 2' },
        { value: 'campera3', label: 'Campera Estilo 3' }
    ]

    const groupStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const groupBadgeStyles = {
        backgroundColor: '#EBECF0',
        borderRadius: '2em',
        color: '#172B4D',
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: '1',
        minWidth: 1,
        padding: '0.16666666666667em 0.5em',
        textAlign: 'center',
    };

    const groupedOptions = [
        {
          label: 'Remeras',
          options: optionsRemeras,
        },
        {
          label: 'Camperas',
          options: optionsCamperas,
        },
    ];
      
    const formatGroupLabel = options => (
    <div style={groupStyles}>
        <span>{options.label}</span>
        <span style={groupBadgeStyles}>{options.length}</span>
    </div>
    );

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    return (
        <>
        {(click 
            ?
            <div className='animate__animated animate__fadeInRight animate__slow container_shop'>
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
                <button onClick={handleClick} className='link_volver'>
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
        :
        <div className='container_tienda'>
            <div className='carrito' onClick={handleClick}>
                <img id='carrito' src='./images/icons/carrito.png' alt='Carrito' />
            </div>
            <div className='envio'>
                <img id='envio' src='./images/icons/shipping.png' alt='Envio' />
            </div>
            <div className='wrapper'>
                <div className='noticia'>
                    <h3>NUEVOS ATUENDOS DE OTOÑO!</h3>
                    <h3>| WHIMSICAL |</h3>
                    <h3>NUEVAS PRENDAS PARA ESTE INVIERNO!</h3>
                    <h3>| WHIMSICAL |</h3>
                    <h3>SI TU ORDEN SUPERA LOS $5000 TENES UN 20% DE DESCUENTO!</h3>
                    <h3>| WHIMSICAL |</h3>
                    <h3>NO TE PIERDAS LAS MEJORES OFERTAS DE OTOÑO!</h3>
                </div>
            </div>
            <div className='container_video'>
                <video id='vid' loop autoPlay muted>
                    <source className='video' src="./videos/video_3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img className='logo_tienda' src='./images/icons/logo_whimsical.png' alt='Logo' />
            </div>
            <h1 className='titulo'>Tienda | Shop {/*<img className='animate__animated animate__fadeIn animate__slower animate__delay-2s cereza' src='./images/icons/cherry.png' alt='Cereza' />*/}</h1>
            <Select className='seleccion' options={groupedOptions} formatGroupLabel={formatGroupLabel}/>
            <div className='animate__animated animate__fadeIn animate__slower animate__delay-1s container_cartas'>
                <div className='carta'>
                    <span className='precio'>$ 799.99</span>
                    <img src='./images/hero/modelo_1.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no estamos realizando pedidos por la página.</h2>
                                    <br />
                                    <br />
                                    <h2>Contáctate con nosotros a través de las siguientes redes sociales para realizar tu pedido! <i className="fas fa-heart" id='corazon'></i></h2>
                                    <br />
                                    <div className='container_redes'>
                                        <a className='link_redes' href='https://instagram.com/_whimsicalclothing_?igshid=33j9vaap2y4f'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        </a>
                                        <a className='link_redes' href='https://www.facebook.com/Whimsical-103596978478363'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        </a>
                                        <a className='link_redes' href='https://api.whatsapp.com/send?phone=+5401151631296&text=Hola! Me gustaria hacer un pedido!'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 5163-1296</h3>
                                        </div>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 349.99</span>
                    <img src='./images/hero/modelo_2.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 299.99</span>
                    <img src='./images/hero/modelo_3.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 999.99</span>
                    <img src='./images/hero/modelo_4.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 359.99</span>
                    <img src='./images/hero/modelo_5.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 279.99</span>
                    <img src='./images/hero/modelo_6.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 599.99</span>
                    <img src='./images/hero/modelo_7.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 699.99</span>
                    <img src='./images/hero/modelo_8.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 299.99</span>
                    <img src='./images/hero/modelo_9.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span className='precio'>$ 599.99</span>
                    <img src='./images/hero/modelo_10.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <Popup
                                trigger={<button className="btn"><img id='plus' src='./images/icons/plus.png' alt='Plus' /> Añadir</button>}
                                modal
                                nested
                            >
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"><h1 className='titulo_modal'><img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /> Importante! <img className='cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1></div>
                                    <div className="content">
                                    {' '}
                                    <h2>Por el momento no esta implementado la realizacion de compras por medio del sitio.</h2>
                                    <br />
                                    <br />
                                    <h2>Comunicate por medio de las redes sociales para hacer tu pedido!</h2>
                                    <br />
                                    <div className='container_redes'>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/instagram.png' alt='Instagram' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/facebook.png' alt='Facebook' />
                                            <h3 className='redes_sociales'>Whimsical</h3>
                                        </div>
                                        <div className='borde'>
                                            <img className='icono' src='./images/icons/whatsapp.png' alt='Whatsapp' />
                                            <h3 className='redes_sociales'>(011) 1234-1234</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Tienda

