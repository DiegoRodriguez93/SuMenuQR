import React from 'react'
import Fade from 'react-reveal/Fade';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function Contact() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {

        let {name, lastName, email, cellphone, message} = data;

        let formData = new FormData();

        formData.append('name',name);
        formData.append('lastName',lastName);
        formData.append('email',email);
        formData.append('cellphone',cellphone);
        formData.append('message',message);

        fetch('https://renoca.ml/api-sumenuqr/contact.php',
        {
            method: 'POST',
            body: formData
        })
        .catch(err => console.error(err))
        .then( res => {
            if(res.ok){
                Swal.fire('Correcto!','En breve alguin de nuestro equipo estará contactandolo','success');
                e.target.reset();
            }else{
                Swal.fire('Error','Ha ocurrido un error, intente más tarde','error');
            }
        })

    }

    const redirect = (url) => {

        window.open( url, '_blank');

    }

    return (
        <Fade>
            <div name="contact" id="contact" className="container-fluid" style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sm-12" style={{ marginTop: '35px', marginTop:'auto', marginBottom:'auto' }}>

                            <div className="row">
                            <div className="col-sm-6" style={{display:'inline-block'}}>
                                <ion-icon data-type="title" name="qr-code-outline"></ion-icon>
                                    <span className="menu-title">SuMenuQR.net</span>
                            </div>
                            <div className="col-sm-6" style={{display:'inline-block', paddingRight:'8%', transform: 'translateY(24px)'}}>
                                <ion-icon onClick={()=>redirect('https://facebook.com/sumenuqrnet')} data-type="social-media" name="logo-facebook" style={{float:'right'}}></ion-icon>
                                <ion-icon onClick={()=>redirect('https://www.instagram.com/sumenu.qr/')} data-type="social-media" name="logo-instagram" style={{float:'right'}}></ion-icon>
                            </div>
                            </div>

                            <hr/>
                                <h3>
                                    “SuMenuQR” ha visto un aumento sobresaliente en las ventas durante el período de la hora de la cena y
                                    se ha duplicado el número de visitantes a sus tiendas para esta promoción ya sea físicamente o por medio
                                    de la tienda electrónica móvil, dando como resultados óptimas ganancias, y más conformidad para sus consumidores.
                                    Esta es una manera asombrosa de usar la tecnología efectivamente para impulsar las ventas, aplicando la creatividad
                                    para crear cosas sencillas y que beneficien a su negocio.
                                </h3>
                            <hr/>

                            <div className="row">
                                <div className="col-lg-6 sm-12">
                                    <ion-icon onClick={()=>redirect('https://wa.me/59899027591')} data-type="social-media" name="logo-whatsapp"></ion-icon>
                                    <h3 style={{display:'inline-block', transform: 'translateY(-13px)'}}>+598 99 027 591</h3>
                                </div>
                                <div className="col-lg-6 sm-12">
                                    <ion-icon data-type="home" name="home-outline"></ion-icon>
                                    <h3 style={{display:'inline-block', transform: 'translateY(-13px)'}}>Montevideo, Uruguay</h3>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6 sm-12" style={{ marginTop: '35px', marginBottom: '35px', border:'2px solid white', padding:'20px' }}>
                            <h2 /* className="hero-title" */ style={{fontSize:'1.7em'}}>Contáctenos : </h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="row">
                                <div className="col-lg-6 sm-12">
                                    <input type="text" className="input-form" name="name" placeholder="Nombre*"
                                        ref={register({ required: "El nombre es requerido" })} />
                                <span className="error-input">{errors.name && errors.name.message}</span>
                                </div>
                                <div className="col-lg-6 sm-12">
                                    <input type="text" name="lastName" className="input-form" placeholder="Apellido" ref={register} />
                                </div>
                                <div className="col-lg-6 sm-12">
                                    <input type="email"
                                        className="input-form"
                                        name="email"
                                        placeholder="Email*"
                                        ref={register({ required: "El Email es requerido" })} />
                                    <span className="error-input">{errors.email && errors.email.message}</span>
                                </div>
                                <div className="col-lg-6 sm-12">
                                    <input type="number" className="input-form" name="cellphone" placeholder="Celular" ref={register} />
                                </div>
                                <div className="col-12">
                                    <textarea name="message" id="message" className="input-form" rows="3" placeholder="Mensaje*"
                                        ref={register({ required: "El mensaje es requerido" })}></textarea>
                                <span className="error-input">{errors.message && errors.message.message}</span>
                                </div>
                                <div className="col-12" style={{ textAlign: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
                                    <button className="hero-button">Enviar Mensaje</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Contact
