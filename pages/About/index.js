import React from 'react'
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <Fade>
        <div id="about" className="container">
        <div className="row" style={{margin:0}}>
            <div className="col-12" style={{padding:'4%'}}>
{/*                 <h5 className="hero-subtitle">Our Master Chef</h5> */}
                <h2 className="hero-title" style={{textAlign:'center',color:'#171717'}}>Acerca de nosotros</h2>
{/*                 <h2 className="hero-title">We cook any dish of our gastronomy to the taste of the client.</h2> */}

                <div className="row">
                    <div className="col-lg-6 sm-12">
                        <img className="ordenador" src="/images/left-about.png" style={{width:'100%'}} alt="cook chef"/>
                    </div>
                    <div className="col-lg-6 sm-12" style={{marginTop:'auto',marginBottom:'auto'}}>

                    <p style={{color:'grey'}}>Renoca es una empresa técnologica dedicada a brindar soluciones técnologicas del 
                    más alto nivel, para diferentes mercados, hemos trabajado con clientes de España, Estados Unidos, Argentina,
                     México, Chile, Colombia y Uruguay.
                    </p>

                    
                    <p style={{color:'grey'}}>SuMenuQR es parte de una de las soluciones técnologicas que brindamos para establacimientos de comidas,
                    brindando la solución para auto administrar de manera virtual a cada uno de sus cliente su menú, pudiendo agregar fotos reales de 
                    sus productos, actualizar precios y platos de manera fácil y simple.
                    Añadiendo la posibilidad de tener una carta multi idiomas.
                    </p>

                    
                    <p style={{color:'grey'}}>Los clientes de SuMenuQR nos han contado que a través del menú virtual han podido aumentar sus ventas!,
                    principalmente los postres, además que mucha gente se siente cómoda revisando la carta todo el tiempo que necesite en todo momento de la comida.
                    </p>
                    
                    </div>
                </div>

            </div>
        </div>
        </div>
        </Fade>
    )
}

export default About
