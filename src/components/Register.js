// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import login from "../images/login.png";
// import { Link, useNavigate } from "react-router-dom";
// import useValidation from "../Hooks/useValidation";
// import { useDispatch } from "react-redux";
// import { MANAGE_USER_REGISTER } from "../api/server";
// import { postRequestMethod } from "../api/api";
// const Register = () => {
//   const { eventHandler } = useValidation();
//   const [authorization, setAuthorization] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackMessage, setSnackMessage] = useState("");

//   const [register, setRegister] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     type: "",
//   });
//   if (register) {
//     console.log("outside", register);
//   }
//   console.log("outside", register);
//   const [error, setError] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     type: "",
//   });

//   const validationHandler = async (e, alterName) => {
//     console.log("register", register);
//     const val = e.target.value;
//     const id = alterName;
//     if (id) {
//       let prom = new Promise((resolve) => {
//         if (true) {
//           resolve(eventHandler(id, val));
//         }
//       });
//       prom.then((res) => setError({ ...error, [e.target.name]: res }));
//     }
//     setRegister({ ...register, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();
//   const dispatchLogin = useDispatch();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log("register", register);
//     postRequestMethod(MANAGE_USER_REGISTER, "", register)
//       .then((res) => {
//         console.log("response is", res);
//         if (res.data && res.data.error) {
//           console.log("response error:", res.data.error);
//           // Handle error
//           setSnackMessage(res.data.error);
//           setOpenSnackbar(true);
//         } else {
//           // sessionStorage.setItem("user", JSON.stringify(res.data.user));
//           // sessionStorage.setItem("token", JSON.stringify(res.data.auth));
//           // dispatchLogin({ type: LOGIN, isAuthenticated: true, token:res.data.auth,user: res.data.user});
//           setSnackMessage(res.data.message);
//           setOpenSnackbar(true);
//           setTimeout(() => navigate("/login"), 3000);
//         }
//       })
//       .catch((error) => {
//         console.error("Error submitting login:", error);
//         // Handle error
//       });
//   };

//   const handleCloseSnackbar = () => setOpenSnackbar(false);

//   useEffect(() => {
//     let timeout;
//     if (openSnackbar) {
//       timeout = setTimeout(() => {
//         setOpenSnackbar(false);
//       }, 3000); // Change duration as needed (in milliseconds)
//     }

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [openSnackbar]);
//   const rowStyle = {
//     boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)", // Adjust shadow properties as needed
//     borderRadius: "10px", // Optional: Add border radius for rounded corners
//     minHeight: "400px", // Increase the minimum height of the row
//   };

//   return (
//     <>
//       <Container style={{ padding: "6% 0", maxWidth: "65%" }}>
//         <Row style={rowStyle} className="bg-light align-items-center">
//           <Col xs={12} md={6} className="p-0">
//             <img
//               src={login}
//               alt="Login"
//               style={{
//                 maxWidth: "100%",
//                 height: "60vh",
//                 backgroundColor: " #7335b7",
//               }}
//             />
//           </Col>
//           <Col xs={12} md={6}>
//             <div className="d-flex flex-column justify-content-center align-items-center h-100">
//               <h2 className="mb-4">Register</h2>
//               <Form onSubmit={handleRegister}>
//                 <Form.Group controlId="formBasicFirstName">
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     required
//                     type="text"
//                     placeholder="Enter first name"
//                     value={register.firstName}
//                     name="firstName"
//                     onChange={(e) => {
//                       validationHandler(e, "alphabet");
//                       console.log("firstnameeee", e);
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicLastName">
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control
//                     required
//                     type="text"
//                     placeholder="Enter last name"
//                     value={register.lastName}
//                     name="lastName"
//                     onChange={(e) => {
//                       validationHandler(e, "alphabet");
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     required
//                     type="email"
//                     placeholder="Enter email"
//                     value={register.email}
//                     name="email"
//                     onChange={(e) => {
//                       validationHandler(e, "email");
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     required
//                     type="password"
//                     placeholder="Password"
//                     value={register.password}
//                     name="password"
//                     onChange={(e) => {
//                       validationHandler(e, "password");
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicType">
//                   <Form.Label>Register Type:</Form.Label>
//                   <Col>
//                     <Form.Check
//                       required
//                       inline
//                       label="Teacher"
//                       type="radio"
//                       id="Teacher"
//                       name="type"
//                       value="Teacher"
//                       checked={register.type === "Teacher"}
//                       onChange={(e) => {
//                         validationHandler(e);
//                       }}
//                     />
//                     <Form.Check
//                       required
//                       inline
//                       label="Parent"
//                       type="radio"
//                       id="parent"
//                       name="type"
//                       value="Parent"
//                       checked={register.type === "Parent"}
//                       onChange={(e) => {
//                         validationHandler(e);
//                       }}
//                     />
//                     <Form.Check
//                       required
//                       inline
//                       label="Student"
//                       type="radio"
//                       id="other"
//                       name="type"
//                       value="Student"
//                       checked={register.type === "Student"}
//                       onChange={(e) => {
//                         validationHandler(e);
//                       }}
//                     />
//                   </Col>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-3">
//                   Register
//                 </Button>
//               </Form>
//               <p className="mt-3 mb-0">
//                 Already have an account? <Link to="/login">Login</Link>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <Alert
//         show={openSnackbar}
//         variant="success"
//         onClose={handleCloseSnackbar}
//         dismissible
//         className="position-fixed"
//         style={{ top: "60px", right: "10px" }}
//       >
//         {snackMessage}
//       </Alert>
//     </>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import login from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import useValidation from "../Hooks/useValidation";
import { useDispatch } from "react-redux";
import { MANAGE_USER_REGISTER } from "../api/server";
import { postRequestMethod } from "../api/api";
const Register = () => {
  const { eventHandler } = useValidation();
  const [authorization, setAuthorization] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
  });
  if (register) {
    console.log("outside", register);
  }
  console.log("outside", register);
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
  });

  const validationHandler = async (e, alterName) => {
    console.log("register", register);
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
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatchLogin = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register", register);
    postRequestMethod(MANAGE_USER_REGISTER, "", register)
      .then((res) => {
        console.log("response is", res);
        if (res.data && res.data.error) {
          console.log("response error:", res.data.error);
          // Handle error
          setSnackMessage(res.data.error);
          setOpenSnackbar(true);
        } else {
          // sessionStorage.setItem("user", JSON.stringify(res.data.user));
          // sessionStorage.setItem("token", JSON.stringify(res.data.auth));
          // dispatchLogin({ type: LOGIN, isAuthenticated: true, token:res.data.auth,user: res.data.user});
          setSnackMessage(res.data.message);
          setOpenSnackbar(true);
          setTimeout(() => navigate("/login"), 3000);
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
  const rowStyle = {
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)", // Adjust shadow properties as needed
    borderRadius: "10px", // Optional: Add border radius for rounded corners
    minHeight: "400px", // Increase the minimum height of the row
  };

  return (
    <>
      <Container style={{ padding: "6% 0", maxWidth: "65%" }}>
        <Row style={rowStyle} className="bg-light align-items-center">
          <Col xs={12} md={6} className="p-0">
            <img
              src={login}
              alt="Login"
              style={{
                maxWidth: "100%",
                height: "60vh",
                backgroundColor: " #7335b7",
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="mb-4">Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter first name"
                    value={register.firstName}
                    name="firstName"
                    onChange={(e) => {
                      validationHandler(e, "alphabet");
                      console.log("firstnameeee", e);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter last name"
                    value={register.lastName}
                    name="lastName"
                    onChange={(e) => {
                      validationHandler(e, "alphabet");
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    value={register.email}
                    name="email"
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
                    value={register.password}
                    name="password"
                    onChange={(e) => {
                      validationHandler(e, "password");
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicType">
                  <Form.Label>Register Type:</Form.Label>
                  <Col>
                    <Form.Check
                      required
                      inline
                      label="Teacher"
                      type="radio"
                      id="Teacher"
                      name="type"
                      value="Teacher"
                      checked={register.type === "Teacher"}
                      onChange={(e) => {
                        validationHandler(e);
                      }}
                    />
                    <Form.Check
                      required
                      inline
                      label="Parent"
                      type="radio"
                      id="parent"
                      name="type"
                      value="Parent"
                      checked={register.type === "Parent"}
                      onChange={(e) => {
                        validationHandler(e);
                      }}
                    />
                    <Form.Check
                      required
                      inline
                      label="Student"
                      type="radio"
                      id="other"
                      name="type"
                      value="Student"
                      checked={register.type === "Student"}
                      onChange={(e) => {
                        validationHandler(e);
                      }}
                    />
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Register
                </Button>
              </Form>
              <p className="mt-3 mb-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Alert
        show={openSnackbar}
        variant="success"
        onClose={handleCloseSnackbar}
        dismissible
        className="position-fixed"
        style={{ top: "60px", right: "10px" }}
      >
        {snackMessage}
      </Alert>
    </>
  );
};

export default Register;
