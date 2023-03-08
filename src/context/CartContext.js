import React, { createContext, useState, useContext} from "react";

//creando el context
 const CartContext = createContext([]);

//creando función para CartContext
export const useCartContext = () => useContext(CartContext);

 const CartProvider = ({children}) => {

    const [cart, setCart] =useState([]);

    //agregando al carrito

    const addProduct = (item, cantidad) => {
        let newCart;
        let article = cart.find(article => article.id ===item.id);
        if(article){
            article.cantidad += cantidad;
            newCart = [...cart];
        }else {
            article= {...item, cantidad: cantidad};
            newCart = [... cart, article]
        }
        setCart(newCart)
    }

    //precio total de compra

    const precioTotal = ()=> {
        return(
            cart.reduce((precio,art) => precio + art.cantidad * art.precio,0)
            )
    }

    const totalProduct = ()=> {
        return(
            cart.reduce((cantidadAcumulada, productoActual) => cantidadAcumulada + productoActual.cantidad,0)
        )
    }
    
    console.log('carrito:', cart);
   
    
        //limpiar el carrito
    const CleanCart = ()=> setCart([]);
    
    const isInCart =(id)=> {
        return(
            cart.find(article => article.id == id) ? true:false
    
        )
            
    }
    
    //eliminar productos del carrito
    const removeCart = (id) => {
        setCart(cart.filter(article => article.id !== id))
    }

    return (
        <CartContext.Provider value= {{
            CleanCart,
            isInCart,
            removeCart,
            addProduct,
            precioTotal,
            totalProduct,
            cart
       
       }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;