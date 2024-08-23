// import React from 'react';
import {Row, Col, Card, Modal } from 'react-bootstrap';

import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { MANAGE_FLASH_CARD_CREATE, MANAGE_FLASH_CARD_GET} from '../../api/server';
import { getRequestById, postRequestMethod } from '../../api/api';

import { FaPlusCircle } from 'react-icons/fa';
const FlashCards = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [flashCardList, setFlashCardList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
//   const navigate = useNavigate();
  // Array containing all questions
  const [types, setTypes] = useState({});
  // console.log("typesssssssssssssssssssssss",types._id)'
  
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const [createFlashCard, setCreateFlashCard] = useState(
 

 { student_id:"",
    title:"",
    description: ""

});


  // Handler to update selected value for a match
  const handleChange = (name,value) => {
    setCreateFlashCard(prevState => ({
      ...prevState,
      [name]:value
    }));
    // console.log("homeworSubmitvfdgf", homeworSubmit);
  
  };
  





  const onSubmitFlashcard = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_FLASH_CARD_CREATE, "", {...createFlashCard,student_id:types?._id})
      .then((res) => {
        console.log("response is", res);
        if (res.data && res.data.error) {
          console.log("response error:", res.data.error);
          // Handle error
          setSnackMessage(res.data.error);
          setOpenSnackbar(true);
        } else {
          setSnackMessage(res.data.message);
          setOpenSnackbar(true);
          handleClose();
          flashCardView();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const flashCardView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){let res = await getRequestById(
        MANAGE_FLASH_CARD_GET,
        types?._id,
        ""
      );
      if (res) {
        setFlashCardList(res.data);
        console.log("asdfghjkljhdfgh",res.data)
      }}
      
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  
  

  React.useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      // Now you can use the object
      setTypes(myObject);
      // setAdmintype(myObject);
    }
  }, []);


  useEffect(() => {
    let timeout;
    if (openSnackbar) {
      timeout = setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000); // Change duration as needed (in milliseconds)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [openSnackbar]);

  React.useEffect(() => {
    flashCardView();
  }, [types?._id]);

  return (
    <>
      


       

      <Modal show={show} onHide={handleClose} centered={true} size={"md"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Flash Card Creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form> */}

<Form onSubmit={onSubmitFlashcard}>
        <Form.Group as={Row} controlId="formName" className='py-2'>
          <Form.Label column sm="3"><h6>Title</h6></Form.Label>
          <Col sm="9">
            <Form.Control required type="text"  placeholder="Enter title" name={"title"} value={createFlashCard.title}
            onChange={(e) => handleChange("title",e.target.value)}
          />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formName" className='py-2'>
          <Form.Label column sm="3"><h6>Description</h6></Form.Label>
          <Col sm="9">
            <Form.Control required as="textarea" rows={3} placeholder="Enter description" name={"description"} value={createFlashCard.description}
            onChange={(e) => handleChange("description",e.target.value)}
          />
        
          </Col>
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Container>
      </Modal>
     

      <Container>

<Row>
    <Col lg={12}>

      <Button variant="primary" onClick={handleShow} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FaPlusCircle /><span style={{ marginLeft: '8px',fontFamily:"sans-serif"}}>Create Flash Card </span> 
      </Button>
    </Col>
  </Row>
  {/* <Row>
    <Col lg={12}>
      <div className="section-title course-home margin-bottom-80 center-align">
        <h2 className="title">My Flash Cards</h2>
      </div>
    </Col>
  </Row> */}
  {/* <Row>
  
    {flashCardList.length > 0 ?(flashCardList?.map((card, index) => (
      <Col lg={4} key={card._id} className='p-3
      '>
        <Card className="text-center h-100" style={{ 
          backgroundColor: "yellow", 
          border: '4px solid orange',
          overflow: 'hidden',
          position: 'relative',
          perspective: '1000px',
          transition: 'transform 0.5s',
          ':hover': {
            transform: 'rotateY(15deg) rotateX(15deg)',
          },
        }}>
          <div className="image-container">
            <img src={flashcardimage} alt={card.title} style={{ 
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
            <h4 className="title"><a href={""} style={{ textDecoration: 'none', color: '#000' }}>{card.title}</a></h4>
            <div className="description" style={{ color: '#000' }}>{card.description}</div>
          </Card.Body>
        </Card>
      </Col>
    )
  )) : (

 null

  )}
  </Row> */}


  <Row>
  <Col lg={12}>
      <div className="section-title course-home margin-bottom-80 center-align">
        <h2 className="title">Level-1</h2>
      </div>
    </Col>
  
    {[{id:1,english:"I",chinese:"我 Wǒ",color:"orange",image:"1.PNG"},
      {id:2,english:"You",chinese:"你 Nǐ",color:"blue",image:"2.PNG"},
      {id:3,english:"Hello",chinese:"你好 Nǐhǎo",color:"green",image:"3.PNG"},
      {id:4,english:"Goodbye",chinese:"再见 Zàijiàn",color:"yellow",image:"4.PNG"}
    ].map((card, index) => (
      <Col lg={3} key={card._id}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card className="text-center custom-card custom-border">
              <div className="image-container">
                <img src={require(`../../images/${card.image}`)} alt={card.english} className="card-image" />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <h1 className="title"><a href={""} style={{ textDecoration: 'none', color: '#000' }}>{card.english}</a></h1>
                <div className="description">{card.description}</div>
              </Card.Body>
            </Card>
          </div>
          <div className="flip-card-back">
            <Card className="text-center  custom-card custom-border">
              <Card.Body className="d-flex flex-column justify-content-center">
                <h1 className="title"><a href={""} style={{ textDecoration: 'none', color: '#000' }}>{card.chinese}</a></h1>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Col>
    

    )
  ) }
  </Row>
</Container>
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
    </>
  );
};

export default FlashCards;

