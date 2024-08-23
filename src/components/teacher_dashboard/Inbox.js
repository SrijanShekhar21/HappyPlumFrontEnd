import React, { useState, useEffect } from 'react';
import { Container, Table, Badge, Modal, Form, Col, Row, Button } from 'react-bootstrap';
import { FaEnvelope, FaEnvelopeOpen, FaUser, FaStar, FaStarHalfAlt, FaEye, FaTrashAlt, FaClock } from 'react-icons/fa';
import { deleteRequest, getRequest, getRequestById, updateRequest } from '../../api/api';
import { MANAGE_MESSAGE_DELETE, MANAGE_MESSAGE_GET, MANAGE_MESSAGE_UPDATE } from '../../api/server';

const Inbox = ({types}) => {
    const [messageList, setMessageList] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [viewMessage, setViewMessage] = useState({
        sender: '',
        description: '',
        date: '',
      });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
  
    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const [modalId, setModalId] = useState();

    const editMessageRead = (id) => {
        updateRequest(MANAGE_MESSAGE_UPDATE,id,{isRead:true} , "")
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
              setShowEditModal(false);
              allMessageView();
              // setTimeout(() => navigate("/login"), 3000);
            }
          })
          .catch((error) => {
            console.error("Error submitting login:", error);
            // Handle error
          });
      };
    
      const deleteMessage = (id) => {
        deleteRequest(MANAGE_MESSAGE_DELETE, id, "")
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
              allMessageView();
              // setTimeout(() => navigate("/login"), 3000);
            }
          })
          .catch((error) => {
            console.error("Error submitting login:", error);
            // Handle error
          });
      };


    const styles = {
        table: {
            marginTop: '2rem',
            cursor: 'pointer',
            
        },
        row: {
            transition: 'background-color 0.3s, box-shadow 0.3s',
        },
        rowHover: {
            backgroundColor: '#f1f1f1',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
        unread: {
            backgroundColor: '#fff3cd',
        },
        read: {
            backgroundColor: '#e9ecef',
        },
        subject: {
            fontWeight: 'bold',
        },
        sender: {
            color: '#6c757d',
        },
        icon: {
            cursor: 'pointer',
            marginRight: '0.5rem',
        },
    };

    const allMessageView = async () => {
        // console.log("object id", id);
        try {
            if (types?.email) {
                let res = await getRequestById(
                    MANAGE_MESSAGE_GET,
                    types?.email,
                    ""
                );
                if (res) {
                    setMessageList(res.data);
                    console.log("asdfghjkljhdfgh", res.data)
                }
            }


        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here or display an error message to the user
        }
    };

    React.useEffect(() => {
        allMessageView();
    }, [types?._id]);
    return (<>
        <Container>
            <h2 style={{ marginBottom: '2rem' }}>Inbox</h2>
            <Table striped bordered hover style={styles.table}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Sender</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Date & Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messageList?.length>0?(messageList?.map(message => (
                        <tr
                            key={message._id}
                            style={{
                                ...styles.row,
                                ...(message.isRead ? styles.read : styles.unread),
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.rowHover.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = message.isRead ? styles.read.backgroundColor : styles.unread.backgroundColor}
                            
                        >
                            <td>
                                <Badge bg={message.isRead ? "success" : "warning"}>
                                    {message.isRead ? 'Read' : 'Unread'}
                                </Badge>
                                {/* {message.isStarred ? (
                                    <FaStar size={20} style={styles.icon} 
                                    onClick={() => editMessageRead(message._id)}
                                     />
                                ) : (
                                    <FaStarHalfAlt size={20} style={styles.icon} 
                                    // onClick={() => toggleStarred(message.id)} 
                                    />
                                )} */}
                            </td>
                            <td style={styles.sender}><FaUser/> {message.sender}</td>
                            <td style={styles.subject}>{message.subject}</td>
                            <td>{message.message}</td>
                            <td>
                                <FaClock size={20} style={{ marginRight: '0.5rem' }} />
                                {message.date.toLocaleString()}
                            </td>
                            <td>
                                <FaEye  style={styles.icon} onClick={() => {
                        setViewMessage({
                          sender: message.sender,
                          subject: message.subject,
                          message: message.message
                    
                        });
                        setShowViewModal(true);
                        editMessageRead(message._id);
                      }}/>
                                <FaTrashAlt style={{ ...styles.icon, color: 'red' }} onClick={(e) => {
                                    // e.stopPropagation(); // Prevent toggling the read status
                                    setModalId(message._id); setShowDeleteModal(true) 
                                }} />
                            </td>
                        </tr>
                    ))):null}
                </tbody>
            </Table>
        </Container>
        <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered={true} size={"md"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>View Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Form >
            <Form.Group as={Row} controlId="formClassName" className="mb-3">
              <Form.Label column sm="2">Sender:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // type="text"  
                  value={viewMessage.sender}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formSubject" className="mb-3">
              <Form.Label column sm="2">Subject:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // as="textarea"
                //   rows={3}
                  value={viewMessage.subject}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDate" className="mb-3">
              <Form.Label column sm="2">Message:</Form.Label>
              <Col sm="10">
                <Form.Control
                  // type="date" 
                  rows={3}
                  value={viewMessage.message}
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
        <Modal.Title>Delete Message?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to delete Message?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteMessage(modalId)}>
          Delete
        </Button>
      </Modal.Footer>
      {/* </Container> */}
    </Modal>
    </>);
};

export default Inbox;
