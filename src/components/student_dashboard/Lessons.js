import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import lesson1 from "../../images/login.png";

const Lessons = () => {
  // <video src={require('../images/watch_demo.mp4')} controls style={{ width: "100%",maxHeight: "80vh" }} />
    const specialities = [
        {
          image: <img src={require('../../images/login.png')} alt="conversation" style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }} />,
          // image:  <video src={require('../../images/watch_demo.mp4')} controls style={{ width: "100%",height: '200px'}}/>


          title: "Level 1.1",
          description: "Introduction to Chinese (Pinyin,tones)",
          color: "#ff0000",
          link: "/"
        },
        {
          image: <img src={require('../../images/lesson1.2.JPG')} alt="conversation" style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }} />,
          title: "Level 1.2",
          description: "Basic conversational skills",
          color: "#00ff00",
          link: "http://202.131.113.154/kids_anim/kids_anim_1.html"
        },
        {
          image: <img src={require('../../images/login.png')} alt="conversation" style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)',
            }
          }} />,
          title: "Level 1.3",
          description: "Everyday routines",
          color: "#0000ff",
          link: "/"
        },
        {
          image: <img src={require('../../images/login.png')} alt="conversation" style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }} />,
          title: "Lesson 1.4",
          description: "date,time,number",
          color: "#ffa500",
          link: "/"
        }
      ];

  return (<>
    <Container>
      <Row>
        <Col lg={12}>
          <div className="section-title course-home margin-bottom-80 center-align">
            <h2 className="title">Our Lessons</h2>
          </div>
        </Col>
      </Row>
      <Row>
        {specialities.map((speciality, index) => (
          <Col lg={3} key={index}>
            <Card className="text-center h-100" style={{ 
              backgroundColor: speciality.color, 
              border: '3px solid #000',
              overflow: 'hidden',
              position: 'relative',
              perspective: '1000px',
              transition: 'transform 0.5s',
              ':hover': {
                transform: 'rotateY(15deg) rotateX(15deg)',
              },
            }}>
              <div className="image-container">
                {/* <img src={speciality.image} alt={speciality.title} style={{ 
                  width: '100%', 
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.5s',
                  ':hover': {
                    transform: 'scale(1.1)',
                  },
                }} /> */}
                {speciality.image}
              </div>
              <Card.Body className="d-flex flex-column justify-content-between" style={{ 
                backgroundColor: '#fff',
                transition: 'background-color 0.3s',
              }}>
                <h4 className="title"><a href={speciality.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>{speciality.title}</a></h4>
                <div className="description" style={{ color: '#000' }}>{speciality.description}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

{/* <Container>
<Row>
  <Col lg={12}>
    <div className="section-title course-home margin-bottom-80 center-align">
      <h2 className="title">Our Stories</h2>
    </div>
  </Col>
</Row>
<Row>
  {specialities.map((speciality, index) => (
    <Col lg={3} key={index}>
      <Card className="text-center h-100" style={{ 
        backgroundColor: speciality.color, 
        border: '3px solid #000',
        overflow: 'hidden',
        position: 'relative',
        perspective: '1000px',
        transition: 'transform 0.5s',
        ':hover': {
          transform: 'rotateY(15deg) rotateX(15deg)',
        },
      }}>
        <div className="image-container">
          <img src={speciality.image} alt={speciality.title} style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }} />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between" style={{ 
          backgroundColor: '#fff',
          transition: 'background-color 0.3s',
        }}>
          <h4 className="title"><a href={speciality.link} style={{ textDecoration: 'none', color: '#000' }}>{speciality.title}</a></h4>
          <div className="description" style={{ color: '#000' }}>{speciality.description}</div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>

<Container>
<Row>
  <Col lg={12}>
    <div className="section-title course-home margin-bottom-80 center-align">
      <h2 className="title">Our Events</h2>
    </div>
  </Col>
</Row>
<Row>
  {specialities.map((speciality, index) => (
    <Col lg={3} key={index}>
      <Card className="text-center h-100" style={{ 
        backgroundColor: speciality.color, 
        border: '3px solid #000',
        overflow: 'hidden',
        position: 'relative',
        perspective: '1000px',
        transition: 'transform 0.5s',
        ':hover': {
          transform: 'rotateY(15deg) rotateX(15deg)',
        },
      }}>
        <div className="image-container">
          <img src={speciality.image} alt={speciality.title} style={{ 
            width: '100%', 
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }} />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between" style={{ 
          backgroundColor: '#fff',
          transition: 'background-color 0.3s',
        }}>
          <h4 className="title"><a href={speciality.link} style={{ textDecoration: 'none', color: '#000' }}>{speciality.title}</a></h4>
          <div className="description" style={{ color: '#000' }}>{speciality.description}</div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container> */}
</> );
}

export default Lessons;
