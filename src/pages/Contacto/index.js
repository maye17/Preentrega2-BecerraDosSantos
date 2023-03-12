import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'

const Contacto = ()=> {
    return (
        <>
        <div className="container">     
        <h2 className="container-title">Escribenos!!</h2>
        <Form className="box__container__contact">
        <Form.Group className="col mb-2 form-label" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ingrese email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="phone" placeholder="ingrese teléfono" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </>
    )
}

export default Contacto;