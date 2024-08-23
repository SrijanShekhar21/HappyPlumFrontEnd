import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import useValidation from '../Hooks/useValidation';
import { MANAGE_POPUP_FORM } from '../api/server';
import { postRequestMethod } from '../api/api';

const PopupForm = () => {
  const [show, setShow] = useState(true); // Set to true by default
  const handleClose = () => setShow(false);


  const { eventHandler } = useValidation();
  const [authorization, setAuthorization] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [popUpForm, setPopUpForm] = useState({
name: "",
    email: "",
    phonenumber: ""
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phonenumber: ""
  });

  const validationHandler = async (e, alterName) => {
    const val = e.target.value;
    const id = alterName;
    if (id) {
      let prom = new Promise((resolve) => {
        if (true) {
          resolve(eventHandler(id, val));
        }
      });
      prom.then((res) => setError({ ...error, [e.target.name]: res }));
    }
    setPopUpForm({ ...popUpForm, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("popUpForm",popUpForm);
    postRequestMethod(MANAGE_POPUP_FORM, "", popUpForm)
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
          // setTimeout(() => navigate("/dashboard"), 2000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };
  
  

  const handleCloseSnackbar = () => setOpenSnackbar(false);

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
  // Inline styles as JavaScript object
  const modalStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '30px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const submitButtonStyle = {
    width: '100%',
    marginTop: '15px',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  };

  return (<>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to our community</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName" style={formGroupStyle}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" 
            value={popUpForm.name}
            error={Boolean(error.name)}
            helperText={error.name}
            name="name"
            autoFocus
            onChange={(e) => {
              validationHandler(e, "alphabetsAndSpace");
            }}/>
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber" style={formGroupStyle}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" 
            value={popUpForm.phonenumber}
            error={Boolean(error.phonenumber)}
            helperText={error.phonenumber}
            name="phonenumber"
            autoFocus
            onChange={(e) => {
              validationHandler(e, "mobile");
            }}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" style={formGroupStyle}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" 
            value={popUpForm.email}
            error={Boolean(error.email)}
            helperText={error.email}
            name="email"
            autoFocus
            onChange={(e) => {
              validationHandler(e, "email");
            }}/>
          </Form.Group>

          <Button variant="primary" type="submit" style={submitButtonStyle}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
    {snackMessage}
  </Alert></>
  );
};

export default PopupForm;
