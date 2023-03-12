import React from "react";
import './style.css';



const Servicios =()=> {
    return(
        <div>
            <div className="box__banner">
                <div className="banner__title">
                    <h1>EL MAQUILLAJE IDEAL PARA TUS EVENTOS SOCIALES</h1>
                </div>
            </div>            
                <div className="box__service">
                <h2>Maquillaje para eventos sociales</h2>
                <p>En este servicio se realiza la rutina de cuidado facial, además técnica de piel a prueba de sudor y lágrimas, el maquillaje de ojos depende del estilo de cada persona y del tipo de evento que sea, de igual manera te daré asesoría de cual estilo te favorecerá más según mi experiencia. </p>
            </div>
            <div className="box__service-content">
                <h3>Maquillaje</h3>
                <ul className="fa-ul">
                <li>
                    Maquillaje Natural sin Pestañas Postizas
                </li>
                            

                    <li>Maquillaje Glam con Pestañas Postizas</li>
                    <li> Maquillaje Artistico – Halloween, Coachella</li>
                    <li>Retoques de Maquillaje</li>
                </ul>
            </div>
        </div>
    )
}

export default Servicios;