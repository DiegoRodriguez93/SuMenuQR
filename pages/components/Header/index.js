import React, { useState } from 'react';
import { handleScroll } from './../../../handlers/handleScroll'

const Header = () => {

    const [ mobileMenuVisibility, setMobileMenuVisibility ] = useState('none');

    const handleDisplayNone = () => {
        setMobileMenuVisibility('none');
    }

    const isActive = {
        textDecoration:'underline'
      };

    const isActiveInMobile = {
        textDecoration:'line-through'
      };

    return (
        <header>
            <div id="home" className="container">
                <div className="row" /* style={{flexWrap: 'nowrap'}} */>
                    <div className="col-lg-4 sm-9" style={{display:'inline-block', width:'70%'}}>
                    <ion-icon data-type="title" name="qr-code-outline"></ion-icon>
                        <span className="menu-title">SuMenuQR.net</span>
                    </div>
                    <nav className="col-lg-4 sm-0 menu ordenador">
                        <div exact className="menu-link" onClick={ () => handleScroll('home')} activeStyle={isActive}>INICIO</div>
                        <div className="menu-link" onClick={ () => handleScroll('about')} activeStyle={isActive}>ACERCA</div>
                        <div className="menu-link" onClick={ () => handleScroll('features')} activeStyle={isActive}>CARACTERISTICAS</div>
                        <div className="menu-link" onClick={ () => handleScroll('example')} activeStyle={isActive}>EJEMPLO</div>
                        <div className="menu-link" onClick={ () => handleScroll('contact')} activeStyle={isActive}>CONTACTO</div>
                    </nav>
                    <div className="col-sm-3 mobile" style={{width:'30%'}}>
                        <img src="/images/ham.png" style={{display:'none!important'}} /* onClick={()=>{setMobileMenuVisibility('block')}} */ className="ham-icon" />
                    </div>
                </div>
            </div>

            <div className="container-fluid mobile-menu" style={{display:mobileMenuVisibility}}>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <img src="/images/ham-x.png" onClick={handleDisplayNone} className="ham-icon" />
                    </div>
                    <div className="col-12">
                        <div exact onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/">HOME</div>
                        <div onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/menu">MENU</div>
                        <div onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/chef">CHEF</div>
                        <div onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/about">ABOUT</div>
                        <div onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/contact">CONTACT</div>
                    </div>
                </div>
            </div>

        </header>
    )

}

export default Header;