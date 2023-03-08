import React from "react";
import { useCartContext } from "../../context/CartContext";
import CharacterCart from "../CharacterCart";


const Cart =()=> {
    const [cart, precioTotal] = useCartContext();

    if(cart.lenght ===0){
        return(
            <>
                <div>
                    <p>El carrito esta vacío</p>
                </div>
            </>
        )
    }


    return(
        <div>
            {cart.map(article => <CharacterCart key =   {article.id} product ={article} />)
            }
            <p>Precio Total:</p>
        </div>
    )
}
export default Cart;