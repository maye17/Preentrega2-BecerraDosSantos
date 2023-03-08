import React from "react";
import { useCartContext } from "../../context/CartContext";

const CharacterCart =({article})=> {
const {removeCart} =useCartContext;

    return(
        <>
            <div>
                <img src={article.image} alt= {article.name}/>
                <div>
                    <p> Titulo: {article.name}</p>
                    <p>Cantidad: {article.cantidad}</p>
                    <p>Precio: {article.price}</p>
                    <p>Subtotal: {article.cantidad}*{article.price}</p>
                    <button onClick={()=>removeCart(article.id)}>Eliminar</button>
                </div>

            </div>
        </>
    )
}

export default CharacterCart