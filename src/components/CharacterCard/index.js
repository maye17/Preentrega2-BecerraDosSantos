import React from "react";
import './style.css'




const CharacterCard = ({data})=> {


    const prince_sign='$';
    return (
        <div>
             <section className="cards" key={data.id} >
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.category}</p>
                  <img src={data.image} alt="imagen"/>
                  <h2>{data.name}</h2>
                  <p>{prince_sign} {data.price}</p>
                </article>
              </div>
            </section>
        </div>
    )
}

export default CharacterCard;