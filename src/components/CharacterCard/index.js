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
       /*  <div className="flex justify-center flex-wrap m-0 md:m-4 ">
        <div className="w-60  bg-white border border-gray-200 rounded-lg shadow m-1">
          <Link to={`/detail/${data.id}`} className="flex justify-center">
            <img
              class="p-8 rounded-t-lg h-50 center"
              src={data.image}
              alt={data.name}
            />
          </Link>
          <div className="px-5 pb-5 no-underline">
            <Link to={`/detail/${data.id}`} className="no-underline">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {data.name}
              </h5>
            </Link>
            <div className="flex items-center justify-between w-40 ">
              <span className="text-2xl font-bold text-gray-900">
                {data.price}
              </span>
              <Link
                to={`/detail/${data.id}`}
                className="cards__container"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div> */
    )
}

export default CharacterCard;