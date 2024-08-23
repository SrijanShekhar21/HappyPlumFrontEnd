import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../images/logo.jpeg";
function Header() {
  return (
       
       <>
       {/* Navbar */}
       <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="sticky-top appbar"  >
       <Container>
       <Navbar.Brand href="/#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Happy Plum
          </Navbar.Brand>

         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
             <Nav.Link href="/#" onClick={()=>window.scroll(0,0)} >Home</Nav.Link>
             <Nav.Link href="/#about">About Us</Nav.Link>
             <Nav.Link href="/#team">Meet the Team</Nav.Link>
             <Nav.Link href="/#testimonials">Testimonials</Nav.Link>
             <Nav.Link href="/#contact">Contact Us</Nav.Link>
             <Nav.Link href="/#faq">FAQ</Nav.Link>
             <Nav.Link href="/#login">Login</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     
     </>
  )
}

export default Header