import React from "react";
import {useCartContext}  from "../../context/CartContext";
import CharacterCart from "../CharacterCart";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'


const Cart =()=> {
    const {cart, totalPrice } = useCartContext();

    if(cart.lenght === 0){
        return(
            <>
               
                    <p>El carrito esta vacío</p>
                    <Link to='/'>Elegir una opción</Link>

            </>
        );
    }


    return(
        <div>
            {
            cart.map(product => <CharacterCart key =   {product.id} product ={product} />)
            }
            <p className="box__total">
                Total a pagar: {totalPrice()}
            </p>
            <ToastContainer />
        </div>
    )
}
export default Cart;