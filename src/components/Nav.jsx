import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import {Link} from "react-router-dom" 

const NavApp = () => {
  const state  =useSelector((state)=>state.cart)
  
  return (
    <Navbar expand="lg" className="bg-success mb-3" style={{marginBottom:"40px !important"}}>
    <Container>
      <Navbar.Brand as={Link} className="text-white" to="/">Cart app</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} className="nav-link text-white" to="/">Products</Nav.Link>
          <Nav.Link as={Link} className="nav-link text-white" to="/cart">Cart ({state.length})</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavApp
