import React from 'react'
import Fade from 'react-reveal/Fade';

function Features() {
    return (
        <Fade>
        <div id="features" className="container-fluid features">
        <div className="container">
        <div className="row">
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="accessibility-outline"></ion-icon>
                <h3 className="feature-name">Autoadministrable</h3>
                <p className="feature-description">
                SuMenuQR te permite administrar los códigos QR, el nombre, las descripciones,
                 el precio y las imagenes de los platos por tu cuenta.
                </p>
            </div>
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="medkit-outline"></ion-icon>
                <h3 className="feature-name">100% seguridad contra el Coronavirus</h3>
                <p className="feature-description">
                Al no tener contacto directo con la carta evitamos un medio de contagio.
                </p>
            </div>
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="language-outline"></ion-icon>
                <h3 className="feature-name">Multilenguaje</h3>
                <p className="feature-description">
                Soporta español, inglés, frances, alemán, portugues, chino y coreano. 
                </p>
            </div>
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="cloud-upload-outline"></ion-icon>
                <h3 className="feature-name">Actualización en tiempo real</h3>
                <p className="feature-description">
                Actualiza en tiempo real precios y stock de platos.
                </p>
            </div>
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="fish-outline"></ion-icon>
                <h3 className="feature-name">Con descripción de alergenos</h3>
                <p className="feature-description">
                Permite informar a los usuarios los alimentos preparados con alergenos.
                 Cumpliendo con las regulaciones de la Unión Europea.
                </p>
            </div>
            <div className="col-lg-4 sm-12">
                <ion-icon data-type="feature" name="qr-code-outline"></ion-icon>
                <h3 className="feature-name">Escaneos ilimitados</h3>
                <p className="feature-description">
                A diferencia de otros servicios, SuMenuQR no tiene limites en cuanto a escaneos y posibles actualizaciones.
                </p>
            </div>
        </div>
        </div>
        </div>
        </Fade>
    )
}

export default Features
