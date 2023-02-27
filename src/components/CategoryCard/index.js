import React from "react";
import './style.css'


const CategoryCard = ({data})=> {
    const prince_sign='$';
    return (
        <div>
             <section className="cards" key={data.id}>
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.category}</p>
                  <img src={data.image} alt={data.name}/>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                  <button>Saber más</button>
                </article>
              </div>
            </section>
        </div>
    )
}

export default CategoryCard;