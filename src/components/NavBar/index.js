import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import './style.css';
import logo from '../assets/maiVisage.jpg';
import CardWidget  from '../CardWidget/index';
import axios from 'axios';


const NavBar = () => {

  const [value,setValue]=useState("")

  const OnChange =(e)=> {
    setValue(e.target.value);
  }

  const OnSubmit =(e)=> {
    e.preventDefault();
    const productInput = value.toLowerCase().replace(/ /g, ""); //Limpiando datos ingresados
    if(productInput){
      axios(`https://fakestoreapi.com/products/${productInput}`)
      .then((res) => console.log(res.data))
    }

  }

    return ( 
      <div>
       <header>
       <Navbar className='header' bg="light" expand="lg">
      <Container fluid>
        <LinkContainer  to='/'>
        <Navbar.Brand className="header__content-logo" href="#">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/'>
              <Nav.Link className='header__text Link'>Inicio</Nav.Link>
            </LinkContainer> 
            <LinkContainer to='/Curso'>
              <Nav.Link className='header__text Link'to='/Curso'>Cursos</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Servicios'> 
              <Nav.Link className='header__text Link'to='/Servicios'>
                Servicios
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Cosmeticos'> 
              <Nav.Link className='header__text Link'to='/Cosmeticos'>
                Indumentaria
              </Nav.Link>
            </LinkContainer>
            <LinkContainer  to='/Contact'>
              <Nav.Link className='header__text Link' to='/Contacto'>
                Contactanos
              </Nav.Link>
            </LinkContainer>
          </Nav>
      <br />
          <Form className="d-flex" onSubmit={OnSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={OnChange}             
            />
            <Button className='header__text' type="submit" variant="outline-primary">Search</Button>
          </Form>
          <CardWidget></CardWidget>
          <p className='CartWidget__info'>5</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </div>
     );
}



export default NavBar;