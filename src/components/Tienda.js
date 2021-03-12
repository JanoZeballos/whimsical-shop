import React from 'react'
import './Tienda.css'
//import { Link } from 'react-router-dom';

function Tienda() {
    return (
        <div className='container_tienda'>
            <img className='whatsapp' src='./images/icons/whatsapp.png' alt='Whatsapp' />
            <div className='wrapper'>
                <div className='noticia'>
                    <h3>Nuevos atuendos de otoño!</h3>
                    <h3>WHIMSICAL</h3>
                    <h3>Vestidos | Jeans | Remeras</h3>
                </div>
            </div>
            <h1 className='animate__animated animate__bounceIn animate__slower titulo'>Tienda | Shop <img className='animate__animated animate__fadeIn animate__slower animate__delay-2s cereza' src='./images/icons/cherry.png' alt='Cereza' /></h1>
            <div className='animate__animated animate__fadeIn animate__slower animate__delay-4s container_cartas'>
                <div className='carta'>
                    <span>$ 799.99</span>
                    <img src='./images/hero/modelo.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 349.99</span>
                    <img src='./images/hero/modelo_2.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 299.99</span>
                    <img src='./images/hero/modelo_3.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 999.99</span>
                    <img src='./images/hero/modelo_4.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 359.99</span>
                    <img src='./images/hero/modelo_5.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 279.99</span>
                    <img src='./images/hero/modelo_6.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 599.99</span>
                    <img src='./images/hero/modelo_7.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 699.99</span>
                    <img src='./images/hero/modelo_8.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 299.99</span>
                    <img src='./images/hero/modelo_9.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
                <div className='carta'>
                    <span>$ 599.99</span>
                    <img src='./images/hero/modelo_10.jpg' alt='' />
                    <div className='container-informacion'>
                        <div className='informacion'>
                            <h1>Producto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className='btn'>Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tienda
