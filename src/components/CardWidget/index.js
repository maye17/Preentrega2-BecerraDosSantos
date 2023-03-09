import React from 'react';
import './style.css'
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from '../../context/CartContext';



const CardWidget = () => {

    const {totalProduct} = useCartContext();



    return(
        <div>

            <FaShoppingCart style={{color: 'white ', fontSize: '30px', padding:'3px'}} to='/Cart' />         
            <span className='info__carrito'>{totalProduct() || ''}</span>

        </div>
    )
}

export default CardWidget;