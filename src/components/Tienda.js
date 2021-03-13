import React from 'react'
import './Tienda.css'
import Select from 'react-select'
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
            <img className='logo_tienda' src='./images/icons/logo.png' alt='Logo' />
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
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
                            <button className='btn'><i className="fas fa-plus"></i> Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tienda

