import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Card, ListGroup, Modal, Alert } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MANAGE_ALL_STUDENTS__GET, MANAGE_PROGRESS_REPORT_CREATE, MANAGE_PROGRESS_REPORT__GET } from '../../api/server';
import { getRequest, getRequestById, postRequestMethod } from '../../api/api';

const ProgressReports = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [progressReport, setProgressReport] = useState({
    createdTId:"",
    studentId:"",
      studentName:"",
      strengths:undefined,
      areasForImprovement:undefined,
      overallProgress:""
    });
    const [studentList, setStudentList] = useState([]);
    const [progressReportList, setProgressReportList] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
  //   const navigate = useNavigate();
    // Array containing all questions
    const [types, setTypes] = useState({});
    // console.log("typesssssssssssssssssssssss",types._id)'
    
    const handleCloseSnackbar = () => setOpenSnackbar(false);


  const onSubmitProgressReport = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_PROGRESS_REPORT_CREATE, "", {...progressReport,createdTId:types?._id})
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
          progressReportView();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const handleChange = (e) => {
    setProgressReport(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    // console.log("homeworSubmitvfdgf", homeworSubmit);
  
  };

  const handleSeperateChange = (e) => {
    setProgressReport(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value.split(',').map(str => str.trim()),
    }));
   
  
  };
 

  const handleSelectChange = (e) => {
    console.log("rameshhhhh",e.target.value)
    const [studentId, studentName] = e.target.value.split('|');
    setProgressReport({
      ...progressReport,
      studentId,
      studentName,
    });
  };


  const progressReportView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){let res = await getRequestById(
        MANAGE_PROGRESS_REPORT__GET,
        types?._id,
        ""
      );
      if (res) {
        setProgressReportList(res.data);
        console.log("asdfghjkljhdfgh",res.data)
      }}
      
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  const allStudentView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){let res = await getRequest(
        MANAGE_ALL_STUDENTS__GET,
        ""
      );
      if (res) {
        setStudentList(res.data);
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
    progressReportView();
  }, [types?._id]);

  React.useEffect(() => {
    allStudentView();
  }, [types?._id]);

  return (<>

    <Modal show={show} onHide={handleClose} centered={true} size={"lg"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Generate Progress Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form 
          onSubmit={onSubmitProgressReport}
          >
            <Form.Group controlId="studentName">
              <Form.Label>Student Name</Form.Label>

<Form.Control 
  required
  as="select"
  name="studentName"
  onChange={handleSelectChange}
>
  <option value="">{"select one option"}</option>
  {studentList?.map((student) => (
    <option 
      key={student._id} 
      value={`${student._id}|${student.fullName}`}
    >
      {student.fullName}
    </option>
  ))}
</Form.Control>
            </Form.Group>

            <Form.Group controlId="strengths">
              <Form.Label>Strengths (comma-separated)</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter strengths"
                name="strengths"
                value={progressReport.strengths}
                onChange={(e) => handleSeperateChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="areasForImprovement">
              <Form.Label>Areas for Improvement (comma-separated)</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter areas for improvement"
                name="areasForImprovement"
                value={progressReport.areasForImprovement}
                onChange={(e) => handleSeperateChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="overallProgress">
              <Form.Label>Overall Progress</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter overall progress"
                name="overallProgress"
                value={progressReport.overallProgress}
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className='my-2'>
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
    

    
    <Container className="mt-4">
    <Button variant="primary" onClick={handleShow}>
        <FaPlusCircle/>Generate Progress Report
      </Button>
      <Row>
        {progressReportList&&progressReportList?.length > 0 ? (
        progressReportList?.map((report, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">Progress Report for {report.studentName}</h4>
              </Card.Header>
              <Card.Body>
                <h5>Strengths:</h5>
                <ListGroup variant="flush">
                  {report?.strengths.map((strength, idx) => (
                    <ListGroup.Item key={idx}>{strength}</ListGroup.Item>
                  ))}
                </ListGroup>
                <h5 className="mt-3">Areas for Improvement:</h5>
                <ListGroup variant="flush">
                  {report?.areasForImprovement.map((area, idx) => (
                    <ListGroup.Item key={idx}>{area}</ListGroup.Item>
                  ))}
                </ListGroup>
                <h5 className="mt-3">Overall Progress:</h5>
                <p>{report.overallProgress}</p>
              </Card.Body>
            </Card>
          </Col>
        ))):null}
      </Row>
    </Container>
    <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
  </>);
};

export default ProgressReports;
