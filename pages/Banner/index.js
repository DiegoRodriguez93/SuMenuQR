import React from 'react'
import Fade from 'react-reveal/Fade';
import { handleScroll } from './../../handlers/handleScroll'

function Banner() {
    return (
        <Fade>
        <div className="container">
        <div className="row">
            <div className="col-lg-6 sm-12 vertical-align">
                {/* <h5 className="hero-subtitle">Bienvenido</h5> */}
                <h2 className="hero-title align-mobile">Menú de código QR:</h2>
                <p style={{padding:'1%'}}>
                    Comparte tu menú digital en un código QR con tus clientes ,
                    100% Auto-administrable, multilenguaje y sin necesidad de instalar app.
                    </p>
                    <div className="container-buttons align-mobile">
                        <button  className="hero-button" onClick={ () => handleScroll('contact')} >Contacto </button>
                        <button  className="hero-button2" onClick={ () => handleScroll('example')}>Ver un menú </button>
                    </div>
            </div>
            <div className="col-lg-6 sm-12 align-mobile">
                <img src="/images/banner-right.png" style={{padding:'8%',width:'100%',maxWidth:'420px'}} alt=""/>
            </div>
        </div>
        </div>
        </Fade>
    )
}

export default Banner
