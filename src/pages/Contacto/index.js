import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = ()=> {
    return (
        <>
        <div className="container">
        <div className="box__container__contact">
        <Form>
        <Form.Group className="col mb-2 form-label" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Enter nombre" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="phone" placeholder="Enter teléfono" />
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
      </div>
      </>
    )
}

export default Contacto;