import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert, Table, Modal, Tab, Tabs } from 'react-bootstrap';
import { MANAGE_ALL_HOMEWORK_GET, MANAGE_ALL_TEST_GET, MANAGE_HOMEWORK_GET, MANAGE_HOMEWORK_SUBMIT, MANAGE_HOMEWORK_TEST_GET, MANAGE_HOMEWORK_VIEW } from '../../api/server';
import { getRequest, getRequestById, postRequestMethod } from '../../api/api';
import ResultPdf from '../student_dashboard/ResultPdf';
import { useNavigate } from 'react-router-dom';
import { FaRegSmile, FaRegFrown, FaFilePdf, FaEye, FaPlusCircle, FaBeer, FaPen } from 'react-icons/fa';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
const SubmissionReview = ({types}) => {
  const [key, setKey] = useState('homework');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewNote, seteviewNote] = useState([]);
  const [homeworkList, setHomeworkList] = useState([]);
  const [testAssessmentList, setTestAssessmentList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const navigate = useNavigate();

  
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  

  // const editMessageRead = (id) => {
  //   updateRequest(MANAGE_MESSAGE_UPDATE,id,{review:e} , "")
  //     .then((res) => {
  //       console.log("response is", res);
  //       if (res.data && res.data.error) {
  //         console.log("response error:", res.data.error);
  //         // Handle error
  //         setSnackMessage(res.data.error);
  //         setOpenSnackbar(true);
  //       } else {
  //         setSnackMessage(res.data.message);
  //         setOpenSnackbar(true);
  //         setShowEditModal(false);
  //         allMessageView();
  //         // setTimeout(() => navigate("/login"), 3000);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting login:", error);
  //       // Handle error
  //     });
  // };

  const homeworkView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){
        let res = await getRequest(
          MANAGE_ALL_HOMEWORK_GET
          ,
          ""
        );
        if (res) {
          setHomeworkList(res.data);
          console.log("HomeworkList",res.data)
        }
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  const testAssessmentView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){
        let res = await getRequest(
          MANAGE_ALL_TEST_GET,
          ""
        );
        if (res) {
          setTestAssessmentList(res.data);
          console.log("TestAssessmentList",res.data)
        }
      }
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  
  React.useEffect(() => {
    homeworkView();
    testAssessmentView();
  }, [types?._id]);



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
  <Container
 style={{ paddingTop: '50px', paddingBottom: '50px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#f8f9fa' }}>
    <Row className="text-center">
      {/* <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #156AA7', paddingBottom: '10px' }}>Frequently Asked Questions</h1>
        </Col>
        <Col lg={3}></Col> */}
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="homework" title="Homework">
        <Container >
      <h2>Homework Result</h2>
      <Table striped bordered hover responsive="md" style={{ backgroundColor: "#7335B7",color:"#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }} >
     
          <tr >
            <th>S.No.</th>
            <th>Name</th>
            <th>Homework done Date</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
  
        <tbody>
          {homeworkList.length>0?(
   homeworkList?.map((list, index) => (
    <tr key={list.id}>
      <td>{index + 1}</td>
      <td>{list.name}</td>
      <td>{list.createdAt}</td>
      <td><button type='button'  className='bg-info text-light border-light' onClick={()=>navigate('/dashboard/submission-review/result', { state: { list } })} ><FaEye/>View</button> 
      <PDFDownloadLink
                                      document={
                                        <ResultPdf list={list} />
                                      }
                                    >
                               <button className='bg-danger text-light border-light'>
                               <FaFilePdf/>Download</button>
                                  
                                    </PDFDownloadLink></td>
                                    
                                    <td><button type='button'  className='bg-info text-light border-light' onClick={()=>navigate('/dashboard/submission-review/result', { state: { list } })} ><FaPen/>Review Note</button> </td>
    </tr>
  ))
) : 
  null
}
        </tbody>
      </Table>
    </Container>
        </Tab>
        <Tab eventKey="test-assessment" title="Test-assessment">

        <Container >
        <h2>Test Assessment Result </h2>
      <Table striped bordered hover style={{ backgroundColor: "#7335B7",color:"#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }}>
        {/* <thead> */}
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Test Assessment done Date</th>
            <th>Result</th>
          </tr>
        {/* </thead> */}
        <tbody>
          
        {
        testAssessmentList&&testAssessmentList?.length > 0 ? (
 testAssessmentList?.map((list, index) => (
    <tr key={list.id}>
      <td>{index + 1}</td>
      <td>{list.name}</td>
      <td>{list.
createdAt}</td>
      <td><button  className='bg-info text-light' type='button' onClick={()=>navigate('/dashboard/submission-review/result', { state: { list } })} ><FaEye/> View</button><PDFDownloadLink
                                      document={
                                        <ResultPdf list={list} />
                                      }
                                    >
                               <button className='bg-danger text-light'>
                               <FaFilePdf/> Download</button>
                                  
                                    </PDFDownloadLink> </td>
      
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
        </Tab>
        
      </Tabs>
      </Container>


      
    
     
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
    </>
  );
};

export default SubmissionReview;
