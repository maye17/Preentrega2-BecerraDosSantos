import React, { useState} from "react";
import './style.css'
import ButtonCount from "../ButtonCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const ItemCard = ({dataDetail})=> {
/* 
  const nombre = useContext(CartContext);
  console.log('nombre:',nombre); */
  const [goCart, setGocart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (cantidad) => {
    setGocart(true);
   /*  console.log(`agregaste: ${cantidad}`); */
    addProduct(dataDetail, cantidad)
    
  } 
   
    const prince_sign='$'
    return (
        <div>
             <section className="cards">
              <div className="cards__container">
                <article className="cards__container-banner">
                  <img src={dataDetail.image} alt={dataDetail.name}/>
                  <h2>{dataDetail.name}</h2>
                  <p>{dataDetail.description}</p>
                  <p>{prince_sign} {dataDetail.price}</p>
                  {
                    goCart ? <Link to='/cart'>Finalizar compra</Link> :
                    <ButtonCount initial ={1} stock={10} onAdd={onAdd} />
                  }
                </article>
              </div>
            </section>
        </div>
    )
}

export default ItemCard;