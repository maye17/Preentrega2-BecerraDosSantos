import React, { useState} from "react";
import './style.css'
import ButtonCount from "../ButtonCount";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
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
    addProduct(dataDetail, cantidad);
    toast.success('el producto fue agregado exitosamente!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }) 

  } 
   
    const prince_sign='$'
    return (
        <div>
             <section className="box">
              <div className="box__cards">
                <img src={dataDetail.image} alt={dataDetail.name}/>
                <article className="box__cards-banner">                  
                  <h3>{dataDetail.name}</h3>
                  <p>{dataDetail.description}</p>
                  <p>{prince_sign} {dataDetail.price}</p>
                  {
                    goCart ? <Link className="btn-add" to='/cart'>Finalizar compra</Link> :
                    <ButtonCount className="btn-add" initial ={1} stock={10} onAdd={onAdd} />
                  }
                </article>
              </div>
            </section>
        </div>
    )
}

export default ItemCard;