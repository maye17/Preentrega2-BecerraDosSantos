import React from "react";


const ClothingCard = ({data}) => {
    const prince_sign='$'
    return (
        <div>
             <section className="cards" key={data.id}>
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.categories}</p>
                  <img src={data.image} alt={data.title}/>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                </article>
              </div>
            </section>
        </div>
    )
}

export default ClothingCard;