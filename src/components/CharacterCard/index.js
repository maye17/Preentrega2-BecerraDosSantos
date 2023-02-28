import React from "react";
import './style.css'
import {Link} from  'react-router-dom';



const CharacterCard = ({data})=> {
   
    const prince_sign='$';
    return (
        <div>
           <Link to={`/detail/${data.id}`} className="flex justify-center">
             <section className="cards" key={data.id} >
              <div className="cards__container">
                <article className="cards__container-banner">
                <p>{data.category}</p>
                  <img src={data.image} alt="imagen"/>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  <p>{prince_sign} {data.price}</p>
                  <button>Saber más</button>
                </article>
              </div>
            </section>
            </Link>
        </div>
    )
}

export default CharacterCard;