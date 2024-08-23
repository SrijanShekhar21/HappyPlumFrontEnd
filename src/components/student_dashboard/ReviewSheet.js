



import React, { Fragment, useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import logoBackground from "../../images/logo.jpeg";
import { MANAGE_REVIEWSHEET_SUBMIT } from '../../api/server';
import { postRequestMethod } from '../../api/api';
const ReviewSheet = () => {
  const [types, setTypes] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [reviewSubmit, setReviewSubmit] = useState({
    student_id: "",
    name: "",
    review: [{ reviewId: 1, reviewName: 'I can say "Hello" and "Goodbye."',isCheck:false },
      { reviewId: 2, reviewName: 'I can say "How are you?" and "I am fine."',isCheck:false },
      { reviewId: 3, reviewName: 'I can say "My name is..."' ,isCheck:false},
      { reviewId: 4, reviewName: 'I can say how old I am.' ,isCheck:false},
      { reviewId: 5, reviewName: 'I can say the number of people in my family and who they are.', isCheck:false},
      { reviewId: 6, reviewName: 'I can count from 1 to 5.',isCheck:false},
      { reviewId: 7, reviewName: 'I can introduce myself using three sentences!' ,isCheck:false}
    ]
  });
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const handleCheckboxChange = (reviewId, isChecked) => {
    setReviewSubmit(prevState => {
      // Update the review array with the new is_check values
      const updatedReviews = prevState.review.map(review => 
        review.reviewId === reviewId 
          ? { ...review, isCheck: isChecked } 
          : { ...review, isCheck: false }
      );

      return {
        ...prevState,
        review: updatedReviews
      };
    });

    console.log("reviewSubmit", reviewSubmit);
  };

// Helper function to get the user's answer for a specific question
const getUserAnswer = (reviewId) => {
  const review = reviewSubmit.review.find(review => review.reviewId === reviewId);
  return review ? review.isCheck : '';
};
  
  const onSubmitReviewsheet = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_REVIEWSHEET_SUBMIT, "", {...reviewSubmit,student_id:types?._id})
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
          // homeworkView();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
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
  return (
    <>
      <Container className={"p-5"} style={{ backgroundColor: "#5CE1E6", borderRadius: "20px", width: "80%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
        <h1 className='text-center'>Review Sheet</h1>
        <Form onSubmit={onSubmitReviewsheet}>
          <Form.Group as={Row} controlId="formName" className='py-2'>
            <Col sm="2"><img src={logoBackground} alt="Login" style={{ maxWidth: '100%', backgroundColor: " #7335b7", }} /></Col>
           
              <Col sm="10">
              <Form.Group as={Row} controlId="formName" className='py-2'>
              <Form.Label column sm="12"><h1>THIS IS WHAT I’VE LEARNED!</h1></Form.Label>
              <Form.Label column sm="2"><h4>Name :</h4></Form.Label>
              <Col sm="10">
                <Form.Control required type="text" value={reviewSubmit.name} name="name" onChange={(e)=>setReviewSubmit({ ...reviewSubmit, [e.target.name]: e.target.value })}/>
                </Col>
                </Form.Group>
              </Col>
        
          </Form.Group>
          {reviewSubmit.review.map((review) => (
        <Fragment key={review.reviewId}>
          <Form.Group as={Row}  className='my-2'>
  <Col sm="11" style={{ backgroundColor: "white", paddingRight: "0" }}>
    <h2>{review.reviewName}</h2>
  </Col>
  <Col sm="1" style={{  display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Form.Check
      style={{ width: "25px", height: "25px"}}
      type="checkbox"
      // value={review.isCheck}
      onChange={(e) => {
        handleCheckboxChange(review.reviewId, e.target.checked);
      }}
    />
  </Col>
</Form.Group>
        </Fragment>
      ))}
      
       <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>

    </>
  );
};

export default ReviewSheet;
