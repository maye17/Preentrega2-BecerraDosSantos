import React from "react";
import './style.css'


const ItemCard = ({dataDetail})=> {
    const prince_sign='$'
    return (
        <div>
             <section className="cards">
              <div className="cards__container">
                <article className="cards__container-banner">
                  <img src={dataDetail.image} alt={dataDetail.name}/>
                  <h2>{dataDetail.name}</h2>
                  <p>{dataDetail.description}</p>
                  <p>{prince_sign} {dataDetail.price}</p>
                </article>
              </div>
            </section>
        </div>
    )
}

export default ItemCard;