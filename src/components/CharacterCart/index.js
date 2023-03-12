import React from "react";
import { useCartContext } from "../../context/CartContext";
import './style.css'
const CharacterCart =({product})=> {

const {removeCart} =useCartContext();
const prince_sign='$';
    return(
        <>
        <div className="box__charac">
        <div className="container-sm">
            <div className="box__character">
                <div className="box__character-cards">
                    <img src={product.image} alt="imagen"/>
                        <div className="box__character-info">
                            <p> Curso: {product.name}</p>
                            <p>Cantidad: {product.cantidad}</p>
                            <p>Precio: {product.price}</p>
                            <p>Subtotal: {prince_sign} {product.cantidad*product.price}</p>
                            <button className="btn btn-danger" onClick={()=>removeCart(product.id)}>Eliminar</button>
                        </div>
                        </div>
                    </div>
        </div>
        </div>
        </>
    )
}

export default CharacterCart