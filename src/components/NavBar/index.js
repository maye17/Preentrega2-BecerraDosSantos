import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import './style.css';
import logo from '../assets/maiVisage.jpg';
import CardWidget  from '../CardWidget/index';



const NavBar = () => {


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

            <NavDropdown title="Cursos" id="navbarScrollingDropdown">
            <LinkContainer to='Curso'>
              <NavDropdown.Item >Todos los Cursos
              </NavDropdown.Item>
            </LinkContainer>
             <NavDropdown.Divider/>
            <LinkContainer to='/categories/Maquillaje'>
              <NavDropdown.Item >
                Maquillaje
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/categories/Master'>
              <NavDropdown.Item>
                Master
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> 
            <LinkContainer to='/Servicios'> 
              <Nav.Link className='header__text Link'to='/Servicios'>
                Servicios
              </Nav.Link>
            </LinkContainer>
            <LinkContainer  to='/Contacto'>
              <Nav.Link className='header__text Link' to='/Contacto'>
                Contactanos
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Cart'>            
            <Nav.Link to='/Cart'>
            <CardWidget />
            </Nav.Link>        
          </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </div>
     );
}



export default NavBar;