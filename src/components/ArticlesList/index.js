import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const ArticlesList =({data})=> {
    const prince_sign='$';
    return(
        <div>
            {data.map(dato =>
                <section className="cards" key={dato.id}>
                <Link to={`/detail/${dato.id}`} >
                <div className="cards__container">
                  <article className="cards__container-banner">
                  <p>{dato.category}</p>
                    <img src={dato.image} alt="imagen"/>
                    <h2>{dato.name}</h2>
                    <p>{dato.description}</p>
                    <p>{prince_sign} {dato.price}</p>
                    <button>Saber más</button>
                  </article>
                </div>
                </Link>
              </section>)}
        </div>
    )
}

export default ArticlesList;