import React, { useEffect, useState } from 'react'
import { MANAGE_ALL_STUDENTS__GET, MANAGE_ASSIGNMENT_DELETE, MANAGE_ASSIGNMENT_GET, MANAGE_ASSIGNMENT_UPDATE } from '../../api/server';
import { deleteRequest, getRequest, getRequestById, updateRequest } from '../../api/api';
import { FaEye, FaFilePdf, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Alert, Button, Col, Container, Dropdown, Form, FormControl, Modal, Row, Table } from 'react-bootstrap';

function AssignmentManager({types}) {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [viewAssignment, setViewAssignment] = useState({
      name: '',
      description: '',
      dueDate: '',
    });
  
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
  
    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const [modalId, setModalId] = useState();

    const [assignmentList, setAssignmentList] = useState([]);
    //state to manage searched data
    const [searchApiData, setSearchApiData] = useState([]);
 
    //state to manage search value
    const [filterVal, setSearchVal] = useState("");

    const [filterData, setFilterData] = useState("");
    console.log("filterdata",filterData)
    // function to handle filter data
    const handleSearch = (e) => {
        if (e.target.value === "") {
            setAssignmentList(searchApiData);
        } else {
            const searchResult = searchApiData.filter((item) => {
                const searchValue = e.target.value.toLowerCase();
                return Object.values(item).some((value) => {
                    if (typeof value === "string" || typeof value === "number") {
                        const itemValue = String(value).toLowerCase();
                        return itemValue.includes(searchValue);
                    }
                    return false;
                });
            });
            setAssignmentList(searchResult);
        }
        setSearchVal(e.target.value);
    };
    const allAssignmentView = async () => {
        // console.log("object id", id);
        try {
            //   if(types?._id){let res = await getRequest(
            if (types?._id) {
                let res = await getRequestById(
                    MANAGE_ASSIGNMENT_GET,
                    types?._id,
                    ""
                  );
                if (res) {
                    setAssignmentList(res.data);
                    setSearchApiData(res.data);
                    console.log("asdfghjkljhdfgh", res.data)
                }
            }


        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here or display an error message to the user
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setViewAssignment({
          ...viewAssignment,
          [name]: value
        });
      };
    const submitEditAssignment = (e) => {
        e.preventDefault();
        updateRequest(MANAGE_ASSIGNMENT_UPDATE, modalId, viewAssignment, "")
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
              allAssignmentView();
              setViewAssignment({
                name: '',
                description: '',
                dueDate: ''
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
        deleteRequest(MANAGE_ASSIGNMENT_DELETE, id, "")
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
              allAssignmentView();
              // setTimeout(() => navigate("/login"), 3000);
            }
          })
          .catch((error) => {
            console.error("Error submitting login:", error);
            // Handle error
          });
      };

    // useEffect(() => {
    //     const filteredData = searchApiData?.filter((item) =>
    //       item.title.toLowerCase().includes(filterData.toLowerCase())
    //     );
    //     setAssignmentList(filteredData);
    //   }, [filterData, searchApiData]);

    React.useEffect(() => {
allAssignmentView 
();
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
    //   }, [types?._id]);
    return (<>
        <Container>
            {/* <InputGroup className="mb-3" style={{ background: "white", margin: "0 1rem" }}> */}
            <FormControl
                placeholder="Search by name and ID"
                value={filterVal}
                onChange={(e) => handleSearch(e)}
                aria-label="Search by name and ID"
            />
            {/* <InputGroup.Append>
        <Button variant="outline-secondary">
          <Search />
        </Button>
      </InputGroup.Append> */}
            {/* </InputGroup> */}

            {/* <Form.Group controlId="studentName">
                <Form.Label>Student Name</Form.Label>

                <Form.Control
                    required
                    as="select"
                    name="studentName"
                    onChange={(e)=>setFilterData(e.target.value)}
                >
                    <option value="">{"select one option"}</option>
                    <option
                        value={"Nina G"}
                    >
                        Nina G
                    </option>
                    <option
                        value={"Suresh S"}
                    >
                        Suresh S
                    </option>
                </Form.Control>
            </Form.Group> */}
            <h2>Assignment List </h2>
            <Table striped bordered hover style={{ backgroundColor: "#7335B7", color: "#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
                {/* <thead> */}
                <tr>
                    <th>S.No.</th>
                    <th>Assignment Name</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Action</th>
                </tr>
                {/* </thead> */}
                <tbody>

                    {
                        assignmentList && assignmentList?.length > 0 ? (
                            assignmentList?.map((list, index) => (
                                <tr key={list.id}>
                                    <td>{index + 1}</td>
                                    <td>{list.name}</td>
                                    <td>{list.description}</td>
                                    <td>{list.dueDate}</td>
                                    <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id={`dropdown-basic`}>
                    Manage
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setViewAssignment({
                          name: list.name,
                          description: list.description,
                          dueDate: list.dueDate,
                      
                        })
                        setShowViewModal(true)
                      }}
                      className="text-info"
                    >
                      <FaEye /> View
                    </Dropdown.Item>


                    <Dropdown.Item
                      onClick={() => { setModalId(list._id); setShowDeleteModal(true) }}
                      className="text-danger"
                    >
                      <FaTrash /> Delete
                    </Dropdown.Item>

                    <Dropdown.Item
                      className="text-primary"
                      onClick={() => {
                        setModalId(list._id); setViewAssignment({
                          name: list.name,
                          description: list.description,
                        dueDate:list.dueDate
                        });
                        setShowEditModal(true)
                      }}
                    >
                      <FaPencilAlt /> Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>

                                </tr>
                            ))
                        ) :
                            (
                                null
                            )
                    }
                </tbody>
            </Table>
        </Container>
        <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered={true} size={"lg"}>
        <Container style={{ backgroundColor: "#5CE1E6" }}>
          <Modal.Header closeButton>
            <Modal.Title>View Assignment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
  
  
            <Form >
              <Form.Group as={Row} controlId="formClassName" className="mb-3">
                <Form.Label column sm="2">Assignment Name:</Form.Label>
                <Col sm="10">
                  <Form.Control
                    // type="text"  
                    value={viewAssignment.name}
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
                    value={viewAssignment.description}
                    required
                  />
                </Col>
              </Form.Group>
  
              <Form.Group as={Row} controlId="formDate" className="mb-3">
                <Form.Label column sm="2">Date:</Form.Label>
                <Col sm="10">
                  <Form.Control
                    // type="date" 
                    value={viewAssignment.dueDate}
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
  
  
  
            <Form onSubmit={submitEditAssignment}>
              <Form.Group as={Row} controlId="formAssignmentName" className="mb-3">
                <Form.Label column sm="2"> Name</Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter assignment name"
                    value={viewAssignment.name}
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
                    value={viewAssignment.description}
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
                    name="dueDate"
                    value={viewAssignment.dueDate}
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
    </>)
}

export default AssignmentManager