import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { MANAGE_PROJECT_UPLOAD_CREATE } from '../../api/server';
import { postRequestMethod } from '../../api/api';

const Project = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [project, setProject] = useState({ studentId: "", projectDoc: undefined });
  const [types, setTypes] = useState({});

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleFileChange = (e) => {
    setProject({ ...project, projectDoc: e.target.files[0] });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!project.projectDoc) {
      setSnackMessage("Please select a file before submitting.");
      setOpenSnackbar(true);
      return;
    }

    postRequestMethod(MANAGE_PROJECT_UPLOAD_CREATE, "multipart/form-data", { ...project, studentId: types?._id })
      .then((res) => {
        console.log("response is", res);
        if (res.data && res.data.error) {
          console.log("response error:", res.data.error);
          setSnackMessage(res.data.error);
        } else {
          setSnackMessage(res.data.message);
        }
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        setSnackMessage("An error occurred while uploading the file.");
        setOpenSnackbar(true);
      });
  };

  useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      setTypes(myObject);
    }
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form onSubmit={handleUpload}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose File</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} required />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!project.projectDoc}>
                Upload
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
        {snackMessage}
      </Alert>
    </>
  );
};

export default Project;
