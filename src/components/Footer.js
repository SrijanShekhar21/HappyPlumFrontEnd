import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-bottom">
      <Container className="d-flex justify-content-center">
        <span className="text-light text-center">
          &copy; 2024 Happy Plum, All rights are reserved.
        </span>
      </Container>
    </Navbar>
  );
}

export default Footer;
