import React from "react";
import './style.css'


const CategoryCard = ({articles})=> {
    const prince_sign='$';
    return (
        <div>
           {articles.map(article => (
             <section className="cards" key={article.id}>
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{article.categoria}</p>
                  <img src={article.image} alt={article.title}/>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <p>{prince_sign} {article.price}</p>
                  <button>Saber más</button>
                </article>
              </div>
            </section>
           ))}
        </div>
    )
}

export default CategoryCard;