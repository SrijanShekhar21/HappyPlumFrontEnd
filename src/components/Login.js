import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import loginLeft from "../images/login.png";
import { Link, useNavigate } from 'react-router-dom';
import useValidation from "../Hooks/useValidation";
import { postRequestMethod } from "../api/api";
import { MANAGE_USER_LOGIN } from "../api/server";
import { LOGIN } from '../redux/action';
import { useDispatch } from 'react-redux';

const Login = () => {

  const { eventHandler } = useValidation();
  const [authorization, setAuthorization] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
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
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatchLogin = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sddfsvfsvfs", login);
    postRequestMethod(MANAGE_USER_LOGIN, "", login)
      .then((res) => {
        console.log("response is", res);
        if (res.data && res.data.error) {
          console.log("response error:", res.data.error);
          // Handle error
          setSnackMessage(res.data.error);
          setOpenSnackbar(true);
        } else {
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          sessionStorage.setItem("token", JSON.stringify(res.data.auth));
          dispatchLogin({ type: LOGIN, isAuthenticated: true, token:res.data.auth,user: res.data.user});
          setSnackMessage(res.data.message);
          setOpenSnackbar(true);
          setTimeout(() => navigate("/dashboard"), 2000);
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


 
  return (<>
    <Container style={{padding: "8% 0", maxWidth: "70%" }}>
      <Row style={rowStyle} className=" align-items-center" >
        <Col xs={12} md={6} className="d-flex align-items-center" style={{ height: '40vh' }}>
          <img src={loginLeft} alt="Left" style={{ maxWidth: '100%',backgroundColor: "white", }} />
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="mb-4">Login</h2>
            <Form
             onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                required
                  type="email"
                  placeholder="Enter email"
                  value={login.email}
                  error={Boolean(error.email)}
                  helperText={error.email}
                  name="email"
                  autoFocus
                  onChange={(e) => {
                    validationHandler(e, "email");
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                required
                  type="password"
                  placeholder="Password"
                  value={login.password}
                 name="password"
                  error={Boolean(error.password)}
                  helperText={error.password}
                  onChange={(e) => {
                    validationHandler(e, "password");
                  }}
                />
              </Form.Group>
               
              <Button variant="primary" type="submit" className="mt-3">
                Login
              </Button>
            </Form>
            <p className="mt-3 mb-0">Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </Col>
      </Row>
     
    </Container>
    
    <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
 </>
  );
};

export default Login;

const rowStyle = {
  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', // Adjust shadow properties as needed
  borderRadius: '10px', // Optional: Add border radius for rounded corners
  minHeight: '400px' // Increase the minimum height of the row
};
