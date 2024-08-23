import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { MANAGE_UPLOAD_SHARE_CREATE } from '../../api/server';
import { postRequestMethod } from '../../api/api';

const UploadShare = ({types}) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [uploadResource, setUploadResource] = useState({ uploadId: "",title:"",resourceType:"", resourceFile: undefined });

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleFileChange = (e) => {
    setUploadResource({ ...uploadResource, resourceFile: e.target.files[0] });
  };

  const handleChange = (e) => {
    setUploadResource({ ...uploadResource, [e.target.name]: e.target.value });
    console.log("UploadResource",uploadResource)
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!uploadResource.resourceFile) {
      setSnackMessage("Please select a file before submitting.");
      setOpenSnackbar(true);
      return;
    }

    postRequestMethod(MANAGE_UPLOAD_SHARE_CREATE, "multipart/form-data", { ...uploadResource, uploadId: types?._id })
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

    return (<>
        <Container>
            <Form onSubmit={handleUpload}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={uploadResource.title} 
                        name="title"
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formType">
                    <Form.Label>Resource Type</Form.Label>
                    <Form.Control 
                        required
                        as="select" 
                        value={uploadResource.resourceType} 
                        name="resourceType"
                        onChange={handleChange} 
                    ><option value="">Select one option</option>
                       <option value="audio">audio</option>
                        <option value="video">Video</option>
                        <option value="document">Document</option>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formFile">
                    <Form.Label>Resource File</Form.Label>
                    <Form.Control 
                        type="file" 
                    
                        onChange={handleFileChange}
                        required 
                    />
                </Form.Group>
    
              <Button variant="primary" className='mt-3' type="submit" disabled={!uploadResource.resourceFile}>
                Upload
              </Button>
            </Form>
        </Container>
        <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
        {snackMessage}
      </Alert>
    </>);
};

export default UploadShare;
