import React, { createContext, useState, useContext} from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


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
            newCart = [...cart]
              
        }else {
            article= {...item, cantidad: cantidad};
            newCart = [... cart, article]
        }
        setCart(newCart)



    }

    //precio total de compra
    
     
    const totalProduct = ()=> {
        return(
            cart.reduce((cantidadAcumulada, productoActual) => cantidadAcumulada + productoActual.cantidad,0)
        )
    };

    const totalPrice = () => {
        return cart.reduce((totalPrice, product) => {
          return totalPrice + (product.price * product.cantidad);
        }, 0);
      };
     
    

    const isInCart =(id)=> {
        return(
            cart.find(article => article.id == id) ? true:false
    
        )
            
    };
    
    //eliminar productos del carrito
    const removeCart = (id) =>( setCart(cart.filter(article => article.id !== id),
        toast.error('Producto eliminado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        ));
      

    return (
        <CartContext.Provider value= {{
            isInCart,
            removeCart,
            addProduct,
            totalPrice,
            totalProduct,
            cart
       
       }}
        >
            {children}
            <ToastContainer />   
        </CartContext.Provider>
        
    )
}

export default CartProvider;