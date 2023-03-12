import React, { useState } from "react";
import {useCartContext}  from "../../context/CartContext";
import CharacterCart from "../CharacterCart";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

/* orders */
const initialState ={
    name:"",
    lastname:"",
    email:"",
    phone:"",
    textarea:""
}


const Cart =()=> {
    const {cart, totalPrice } = useCartContext();
    const [values, setValues] = useState(initialState);


    //generando orden de compra
    const order ={
    initialState:{values},
        items:cart.map(product => ({id:product.id, title: product.name, price:product.price, cantidad: product.cantidad})),
        total: totalPrice(),
    };

    const handleOnChange =(e)=> {
        const {value, name} =e.target;
        setValues({...values, [name]: value})
    }
    


 /*    const handleOnSubmit = async(e) => {
        const docRef = await addDoc(collection(db,'orders '),
        {
            values,
            items:cart.map(product => ({id:product.id, title: product.name, price:product.price, cantidad: product.cantidad})),
        total: totalPrice(),
        }
        )
    
    } */

    const handleClick = ()=> {
        const db = getFirestore();
        const ordersCollection =collection(db, 'orders');
        addDoc(ordersCollection, order)
        toast.success('compra generada con éxito!!', {
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

    if(cart.length === 0){
        return(
            <>
                <div className="box__vacio">
                    <p className="box__vacio-info">El carrito esta vacío</p>
                    <Link className="btn-volver" to='/Curso'>Volver a comprar</Link>
                </div>    

            </>
        );
    } 


    return(
        <>
            <div className="box__cart">
                {
                cart.map(product => <CharacterCart key =   {product.id} product ={product} />)
                }
                 <div className="box__formulario">
                    <h2>Formulario de Compra </h2>

                    <Form className="box__formulario-form">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                         className="form-text"
                          type="text"
                           placeholder="Nombre"
                            name="name"
                            value={values.name} 
                            onChange={handleOnChange}/>
                         <Form.Control
                          className="form-text"
                           type="text"
                            placeholder="Apellido"
                             name="lastname"
                             value={values.lastname}
                             onChange={handleOnChange}/>
                            <Form.Control
                             className="form-text" 
                             type="email" placeholder="name@example.com" name="email" 
                             value={values.email}
                             onChange={handleOnChange}/>
                            <Form.Control 
                            className="form-text"
                             type="text" 
                             placeholder="Telefono"
                              name="phone"
                              value={values.phone}
                              onChange={handleOnChange}/>
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3}  name="textarea"
                            value={values.textarea}
                            onChange={handleOnChange}/>
                        </Form.Group>
                    </Form>
                    <p className="box__total">
                        Total a pagar: {totalPrice()}
                    </p>
                    <button className="btn btn-primary" onClick={handleClick}>Generar Compra</button>
                </div>
                
            </div>   
            <ToastContainer />           
                
               
        </>
    )
}
export default Cart;