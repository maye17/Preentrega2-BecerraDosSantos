import React, {useState, useEffect} from "react";
import './style.css'

const ButtonCount = ({initial, stock, onAdd}) => {

    const [count, setCount] =useState((initial));

    const decreases = () => {
        setCount(count - 1)
    }

    const increase = ()=> {
        setCount(count + 1);
    }

    //reiniciar
    useEffect(()=> {
        setCount(parseInt(initial))
    }, [initial])


    return(
        
        <>
        <div className="counter">
            <button disabled={count <=1} onClick={decreases}>-</button>
            <span>{count}</span>
            <button disabled={count >=stock} onClick={increase}>+</button>   
            <div>
                <button disabled={stock <=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default ButtonCount;