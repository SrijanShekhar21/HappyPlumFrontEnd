import React, { Fragment, useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, ListGroup, Alert, Modal, Dropdown, Table } from 'react-bootstrap';
// import AlertMessage from '../common_component/AlertMessage';
import { deleteRequest, getRequest, getRequestById, postRequestMethod, updateRequest } from '../../api/api';
import { BASE_SERVER_URL, MANAGE_ALL_STUDENTS__GET, MANAGE_CLASS_ORGANIZATION_CREATE, MANAGE_CLASS_ORGANIZATION_DELETE, MANAGE_CLASS_ORGANIZATION_GET, MANAGE_CLASS_ORGANIZATION_UPDATE } from '../../api/server';
import { FaEye, FaPencilAlt, FaPlusCircle, FaTrash } from 'react-icons/fa';
import axios from 'axios';

function ClassList() {
  const [types, setTypes] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [viewClass, setViewClass] = useState({
    className: '',
    description: '',
    date: '',
    time: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [modalId, setModalId] = useState();
  const [classForm, setClassForm] = useState({
    className: '',
    description: '',
    date: '',
    time: ''
  });


  // const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  // console.log("studentListstudentList",studentList)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassForm({
      ...classForm,
      [name]: value
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setViewClass({
      ...viewClass,
      [name]: value
    });
  };


  const onSubmitClassForm = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_CLASS_ORGANIZATION_CREATE, "", { ...classForm, createdTId: types?._id })
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
          handleCloseModal();
          classView();
          setClassForm({
            className: '',
            description: '',
            date: '',
            time: ''
          })
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const onSubmitEditClass = (e) => {
    e.preventDefault();
    updateRequest(MANAGE_CLASS_ORGANIZATION_UPDATE, modalId, viewClass, "")
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
          setShowEditModal(false)
          classView();
          setViewClass({
            className: '',
            description: '',
            date: '',
            time: ''
          })
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const deleteClassForm = (id) => {
    deleteRequest(MANAGE_CLASS_ORGANIZATION_DELETE, id, "")
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
          setShowDeleteModal(false);
          classView();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const classView = async () => {
    // console.log("object id", id);
    try {
      if (types?._id) {
        let res = await getRequestById(
          MANAGE_CLASS_ORGANIZATION_GET,
          types?._id,
          ""
        );
        if (res) {
          setClassList(res.data);
          console.log("asdfghjkljhdfgh", res.data)
        }
      }


    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  const allStudentView = async () => {
    // console.log("object id", id);
    try {
      if (types?._id) {
        let res = await getRequest(
          MANAGE_ALL_STUDENTS__GET,
          ""
        );
        if (res) {
          setStudentList(res.data);
          console.log("asdfghjkljhdfgh", res.data)
        }
      }


    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };



  const [classList, setClassList] = useState();

  const handleAssignStudents = async (studentId, studentName, classId, checked) => {
    if (checked) {
      try {
        // Assign or reassign student to class
        const response = await axios.put(`${BASE_SERVER_URL}/class-organization/update`, {
          studentId,
          classId,
          studentName
        });

        if (response.status === 200) {
          classView();
          console.log("Student assigned/reassigned successfully", studentId);
        } else {
          console.error("Failed to assign/reassign student", response.data);
        }
      } catch (error) {
        console.error("Error assigning/reassigning student", error);
      }
    } else {
      try {
        // De-assign student from class
        const response = await axios.delete(`${BASE_SERVER_URL}/class-organization/delete`, {
          data: { studentId, classId },
        });

        if (response.status === 200) {
          classView();
          console.log("Student de-assigned successfully", studentId);
        } else {
          console.error("Failed to de-assign student", response.data);
        }
      } catch (error) {
        console.error("Error de-assigning student", error);
      }
    }
  };

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
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      // Now you can use the object
      setTypes(myObject);
      // setAdmintype(myObject);
    }
  }, []);

  React.useEffect(() => {
    classView();
  }, [types?._id]);

  React.useEffect(() => {
    allStudentView();
  }, [types?._id]);
  return (<>
    <Modal show={showModal} onHide={handleCloseModal} centered={true} size={"lg"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Create Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Form onSubmit={onSubmitClassForm}>
            <Form.Group as={Row} controlId="formClassName" className="mb-3">
              <Form.Label column sm="2">Class Name</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="className"
                  placeholder="Enter class name"
                  value={classForm.className}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDescription" className="mb-3">
              <Form.Label column sm="2">Description</Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Enter description"
                  value={classForm.description}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDate" className="mb-3">
              <Form.Label column sm="2">Date</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="date"
                  name="date"
                  value={classForm.date}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formTime" className="mb-3">
              <Form.Label column sm="2">Time</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="time"
                  name="time"
                  value={classForm.time}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">Create Class</Button>
          </Form>

        </Modal.Body>

      </Container>
    </Modal>
    <Container>
      <Button variant="primary" onClick={handleShowModal}>
        <FaPlusCircle />Create Class
      </Button>


      <h2 className="mt-5">Class List</h2>
      {/* <ListGroup>
        
      {classList?.length>0?(classList?.map((cls, index) => (
        <ListGroup.Item key={index}>
          <h5>Name:{cls.className}</h5>
          <p>Description:{cls.description}</p>
          <p>Date:{cls.date} at Time:{cls.time}</p>
          <p>Assigned Students : {(cls.assignedStudents?.map((s) => s.sName).join(', '))||""}</p>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Assign Students
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {studentList?.map((student) => (
        <Fragment  key={student.id} >
          <span>
          <Form.Check
          className="m-3"
        type="checkbox"
        label={student.firstName}
        checked={cls.assignedStudents?.some((s) => s.sId === student._id)}
        onChange={(e) => handleAssignStudents(student._id,student.firstName, cls._id,e.target.checked)}
      /></span>
      </Fragment> 
    ))}
        
      </Dropdown.Menu>
    </Dropdown>
        </ListGroup.Item>
      ))):<h1>Not Found Classess</h1>}
    </ListGroup> */}
      <Table striped bordered hover style={{ backgroundColor: "#7335B7", color: "#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}

      >
        {/* <thead  >
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Time</th>
          <th>Assigned Students</th>
          <th>Assign/De-Assign</th>
          <th>Actions</th>
          <th>Update to Parent</th>
        </tr>
      </thead> */}
        {/* <thead> */}
        <tr>
        <th>S.No.</th>
          <th>Class Name</th>
          <th>Description</th>
          <th>Date</th>
              <th>Time</th>
          <th>Assigned/Deassign Students</th>
          <th>Actions</th>
        </tr>
        {/* </thead> */}

        <tbody >
          {classList?.length > 0 ? (classList?.map((cls, index) => (
            <tr key={classList._id}>
              <td>{index + 1}</td>
              <td>{cls.className}</td>
              <td>{cls.description}</td>
              <td>{cls.date}</td>
              <td>{cls.time}</td>
              <td>{cls.assignedStudents?.map((s) => s.sName).join(', ') || 'None'}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant={"primary"} id={"dropdown-basic"}>
                    Assign Students
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {studentList.map((student) => (
                      <Form.Check
                        key={student._id}
                        className="m-3"
                        type="checkbox"
                        label={student.fullName}
                        checked={cls.assignedStudents?.some((s) => s.sId === student._id)}
                        onChange={(e) =>
                          handleAssignStudents(student._id, student.fullName, cls._id, e.target.checked)
                        }
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>

              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id={`dropdown-basic`}>
                    Manage
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setViewClass({
                          className: cls.className,
                          description: cls.description,
                          date: cls.date,
                          time: cls.time
                        })
                        setShowViewModal(true)
                      }}
                      className="text-info"
                    >
                      <FaEye /> View
                    </Dropdown.Item>


                    <Dropdown.Item
                      onClick={() => { setModalId(cls._id); setShowDeleteModal(true) }}
                      className="text-danger"
                    >
                      <FaTrash /> Delete
                    </Dropdown.Item>

                    <Dropdown.Item
                      className="text-primary"
                      onClick={() => {
                        setModalId(cls._id); setViewClass({
                          className: cls.className,
                          description: cls.description,
                          date: cls.date,
                          time: cls.time
                        });
                        setShowEditModal(true)
                      }}
                    >
                      <FaPencilAlt /> Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td><Button>Updates</Button></td>
            </tr>
          ))) : <h1>not found classes</h1>}
        </tbody>
      </Table>

    </Container>
    <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered={true} size={"md"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>View Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Form >
            <Form.Group as={Row} controlId="formClassName" className="mb-3">
              <Form.Label column sm="2">Class Name:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // type="text"  
                  value={viewClass.className}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDescription" className="mb-3">
              <Form.Label column sm="2">Description:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // as="textarea"
                  rows={3}
                  value={viewClass.description}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDate" className="mb-3">
              <Form.Label column sm="2">Date:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // type="date" 
                  value={viewClass.date}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formTime" className="mb-3">
              <Form.Label column sm="2">Time:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // type="time" 
                  value={viewClass.time}
                  required
                />
              </Col>
            </Form.Group>


          </Form>

        </Modal.Body>

      </Container>
    </Modal>
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered={true} >
      {/* <Container style={{ backgroundColor: "#5CE1E6" }}> */}
      <Modal.Header closeButton>
        <Modal.Title>Delete class?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to delete class?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteClassForm(modalId)}>
          Delete
        </Button>
      </Modal.Footer>
      {/* </Container> */}
    </Modal>
    <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered={true} size={"lg"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Form onSubmit={onSubmitEditClass}>
            <Form.Group as={Row} controlId="formClassName" className="mb-3">
              <Form.Label column sm="2">Class Name</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="className"
                  placeholder="Enter class name"
                  value={viewClass.className}
                  onChange={handleEditChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDescription" className="mb-3">
              <Form.Label column sm="2">Description</Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Enter description"
                  value={viewClass.description}
                  onChange={handleEditChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDate" className="mb-3">
              <Form.Label column sm="2">Date</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="date"
                  name="date"
                  value={viewClass.date}
                  onChange={handleEditChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formTime" className="mb-3">
              <Form.Label column sm="2">Time</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="time"
                  name="time"
                  value={viewClass.time}
                  onChange={handleEditChange}
                  required
                />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">Edit Class</Button>
          </Form>

        </Modal.Body>

      </Container>
    </Modal>


    <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
  </>
  );
}

export default ClassList;

