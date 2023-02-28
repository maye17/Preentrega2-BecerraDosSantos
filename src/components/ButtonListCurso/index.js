import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const ButtonListCurso =({categorias, filterCategoria}) => {

    return(
        <div>
              
            {categorias.map(category=>(
                <Link to={`/category/${category}`}> 
                <button
                onClick={()=> filterCategoria(category)}
                key={category}
                className="btn-category"
                type="button">                 
                {category}
                </button>
                 </Link> 
            ))}
        </div>
    )
}
export default ButtonListCurso;
