import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { MANAGE_ALL_USER_GET, MANAGE_MESSAGE_CREATE } from '../../api/server';
import { useNavigate } from 'react-router-dom';
import { getRequest, postRequestMethod } from '../../api/api';

const ComposeMessage = ({ types }) => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const [messageForm, setMessageForm] = useState({
        recipient: '',
        subject: '',
        message: '',

    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleChange = (e) => {
        setMessageForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log("homeworSubmitvfdgf", messageForm);

    };

    const submitMessage = (e) => {
        e.preventDefault();
        postRequestMethod(MANAGE_MESSAGE_CREATE, "", { ...messageForm, sender: types?.email })
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
                    // setTimeout(() => navigate("/dashboard/assignment-manager"), 3000);
                }
            })
            .catch((error) => {
                console.error("Error submitting login:", error);
                // Handle error
            });
    };


    const allUserView = async () => {
        // console.log("object id", id);
        try {
            if (types?._id) {
                let res = await getRequest(
                    MANAGE_ALL_USER_GET,
                    ""
                );
                if (res) {
                    setUserList(res.data);
                    console.log("asdfghjkljhdfgh", res.data)
                }
            }


        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here or display an error message to the user
        }
    };
    React.useEffect(() => {
        allUserView();
    }, [types?._id]);

    return (<>
        <Container>
            <h2>Compose Message</h2>
            <Form onSubmit={submitMessage}>
                <Form.Group controlId="formRecipient">
                    <Form.Label>Recipient</Form.Label>

                    <Form.Control
                        required
                        as="select"
                        name="recipient"
                        value={messageForm.recipient}
                        onChange={handleChange}
                    >
                        <option value="">{"select one option"}</option>
                        {userList?.map((user) => (
                            <option
                                key={user._id}
                                value={user.email}
                            >
                                {user.email}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        value={messageForm.subject}
                        name="subject"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formCMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={messageForm.message}
                        name="message"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>Send</Button>
            </Form>
        </Container>
        <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
        {snackMessage}
        </Alert>
  </>  );
};

export default ComposeMessage;
