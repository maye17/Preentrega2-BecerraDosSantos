import React from "react";
import './style.css'


const ItemCard = ({data})=> {
  console.log({data});
    const prince_sign='$'
    return (
        <div>
             <section className="cards">
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.category}</p>
                  <img src={data.image} alt={data.name}/>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                </article>
              </div>
            </section>
        </div>
    )
}

export default ItemCard;