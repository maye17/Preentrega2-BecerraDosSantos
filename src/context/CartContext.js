import React, { createContext, useState, useContext} from "react";
import { toast } from 'react-toastify';


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

    const totalPrice = () => {
        return cart.reduce((precio, art) => precio + art.cantidad * art.precio,0) 
    };         
     
    const totalProduct = ()=> {
        return(
            cart.reduce((cantidadAcumulada, productoActual) => cantidadAcumulada + productoActual.cantidad,0)
        )
    };
    
    console.log('carrito:', cart);
   
    
        //limpiar el carrito
    const CleanCart = ()=> setCart([]);
    
    const isInCart =(id)=> {
        return(
            cart.find(article => article.id == id) ? true:false
    
        )
            
    };
    
    //eliminar productos del carrito
    const removeCart = (id) => setCart(cart.filter(article => article.id !== id),toast.error('El producto fue eliminado!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }));
      

    return (
        <CartContext.Provider value= {{
            CleanCart,
            isInCart,
            removeCart,
            addProduct,
            totalPrice,
            totalProduct,
            cart
       
       }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;