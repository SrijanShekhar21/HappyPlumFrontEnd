import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components
import avatar from "../../images/login.png";

const Avatar = () => {
  const [types, setTypes] = useState({});

  React.useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      // Now you can use the object
      setTypes(myObject);
      // setAdmintype(myObject);
    }
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="my-5" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <Card.Img variant="top" src={avatar} alt="Avatar" />
            <Card.Body>
              <Card.Title><b>{types?.fullName}</b></Card.Title>
              <Card.Text>
              {types?.type} 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
        <Col md={8}>
        <Card className='my-5'>
      <Card.Header as="h5">Language Level</Card.Header>
      <Card.Body>
        <Card.Title>Student Overview</Card.Title>
        <Card.Text>
         A summary of your progress
        </Card.Text>
        <Row>
          <Col><Card >
      <Card.Header as="h1">Level 1</Card.Header>
      <Card.Body>
        <Card.Title>Current Level</Card.Title>
        <Card.Text>
          Beginning chinese and introduction to mandarin.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card >
      <Card.Header as="h1">Level 1.1</Card.Header>
      <Card.Body>
        <Card.Title>Next Level</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        </Row>
        
    
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
  );
};

export default Avatar;
