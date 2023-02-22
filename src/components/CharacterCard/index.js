import React from "react";
import './style.css'


const CharacterCard = ({data})=> {
    const prince_sign='$';
    return (
        <div>
             <section className="cards">
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.categoria}</p>
                  <img src={data.image} alt="imagen"/>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                  <button>Saber más</button>
                </article>
              </div>
            </section>
        </div>
    )
}

export default CharacterCard;