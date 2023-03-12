import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';



const formInitial = {
  nombre:"",
  email:"",
  telefono:"",
  mensaje:""
 
}


const Contacto = ()=> {


  const [datosForm, setDatoForm] = useState(formInitial);

  const forms ={
    formInitial:{datosForm}
  
    };


 


  const FormOnChange =(e)=> {
      const {value, name} =e.target;
      setDatoForm({...datosForm, [name]: value})
  }
  

  const EnviarForm = async (e, nombre)=> {
    e.preventDefault();
if(datosForm.nombre=="" && datosForm.email =="" && datosForm.mensaje ==""){
  Swal.fire({
    title: 'Error!',
    text: 'Debe completar los campos del formulario',
    icon: 'error',
    confirmButtonText: 'Cerrar'
  })
}else {
  const db = getFirestore();
  const docRef = await addDoc(collection(db ,"form"),{
    datosForm,
    },
    toast.success('Su consulta será respondida a la brevedad!!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
      )
     setDatoForm(formInitial);
  }

  }

    return (
        <>
        <div className="container">     
        <h2 className="container-title">Escribenos!!</h2>
        <Form className="box__container__contact" onSubmit={EnviarForm}>
        <Form.Group className="col mb-2 form-label" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="ingrese nombre" name="nombre" value={datosForm.nombre}  onChange={FormOnChange} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ingrese email" name="email" value={datosForm.email}  onChange={FormOnChange} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="phone" placeholder="ingrese teléfono" name="telefono" value={datosForm.telefono}  onChange={FormOnChange} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control as="textarea" rows={3} name="mensaje" value={datosForm.mensaje}  onChange={FormOnChange} />
      </Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <ToastContainer />         
      </>
    )
}

export default Contacto;