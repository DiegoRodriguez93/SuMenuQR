import React from 'react'
import Fade from 'react-reveal/Fade';

function Menu() {
    return (
        <Fade>
            <div id="example" className="container-fluid banner">
            <div className="container">
            <div className="row" style={{margin:0}}>
                <div className="col-lg-12">
                    <h2 className="hero-title" style={{textAlign:'center',marginTop:'15px'}}>Menú de ejemplo:</h2>

                    <div className="row menu-container">
                    <div className="col-lg-2 sm-12"></div>
                    <div className="col-lg-8 sm-12 menu-categoria"><h4>Promociones</h4></div>
                    <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/menu1.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Duo de hamburguesas con queso, panceta y papas</h4>
                                    <h5 className="menu-description">Pan, hamburguesa 100% carne, tomate, lechuga, queso cheddar, panceta, papas y aderezos</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$264</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/menu2.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Duo de hamburguesas Royal + extra queso</h4>
                                    <h5 className="menu-description">Pan, hamburguesa 100% carne, tomate, lechuga, queso cheddar, huevo, papas y aderezos</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$284</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/menu3.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Promo familiar super power!</h4>
                                    <h5 className="menu-description">5 hamburguesas con queso y panceta + 4 papas grandes + Nuggets de pollo</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$628</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                    <div className="col-lg-2 sm-12"></div>
                    <div className="col-lg-8 sm-12 menu-categoria"><h4>hamburguesas</h4></div>
                    <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/hamb1.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Hamburguesa de pollo Premium</h4>
                                    <h5 className="menu-description">Pan, tomate, lechuga, hamburguesa 100% pollo, huevo y salsas.</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$199</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/hamb2.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Hamburguesa de carne Premium</h4>
                                    <h5 className="menu-description">Pan, tomate, lechuga, hamburguesa 100% carne, queso cheddar, panceta, huevo y salsas</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$244</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>

                    <div className="row menu-container">
                        <div className="col-lg-2 sm-12"></div>
                        <div className="col-lg-8 sm-12">
                            <div className="row">
                                <div className="col-lg-4 sm-12 menu-img-container">
                                    <img src="/images/menu2/hamb3.jpg" className="menu-img" alt=""/>
                                </div>
                                <div className="col-lg-6 sm-10 vertical-align">
                                    <h4 className="menu-name">Hamburguesa de la casa Premium!</h4>
                                    <h5 className="menu-description">Pan, tomate, lechuga, hamburguesa 100% pollo, queso cheddar, rellena de papas, huevo y salsas</h5>
                                </div>
                                <div className="col-lg-2 sm-12 menu-price-container">
                                <h3 className="menu-price">$228</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 sm-12"></div>
                    </div>



                </div>
            </div>
            </div>
            </div>
        </Fade>
    )
}

export default Menu
