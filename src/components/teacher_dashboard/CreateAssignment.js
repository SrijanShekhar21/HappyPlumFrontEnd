import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { MANAGE_ASSIGNMENT_CREATE } from '../../api/server';
import { getRequest, getRequestById, postRequestMethod } from '../../api/api';
import { useNavigate } from 'react-router-dom';
const CreateAssignment = ({types}) => {
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    createdTId:"",
      name:"",
      description:"",
      dueDate:""
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleChange = (e) => {
      setAssignment(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
      // console.log("homeworSubmitvfdgf", homeworSubmit);
    
    };

  const submitAssignment = (e) => {
    e.preventDefault();
    if(types?._id){
    postRequestMethod(MANAGE_ASSIGNMENT_CREATE, "", {...assignment,createdTId:types?._id})
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
          setTimeout(() => navigate("/dashboard/assignment-manager"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });}
  };

  return (<><Container>
    <Form onSubmit={submitAssignment}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
        required
          type="text"
          name="name"
          placeholder="Enter title"
          value={assignment.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
        required
          as="textarea"
          rows={3}
          name="description"
          placeholder="Enter description"
          value={assignment.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
        required
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='mt-4'>
       Submit
      </Button>
    </Form>
</Container>
<Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
{snackMessage}
</Alert>
 </> );
};

export default CreateAssignment;
