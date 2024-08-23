import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert, Table, Modal } from 'react-bootstrap';
import { MANAGE_HOMEWORK_GET, MANAGE_HOMEWORK_SUBMIT, MANAGE_HOMEWORK_VIEW } from '../../api/server';
import { getRequestById, postRequestMethod } from '../../api/api';
import ResultPdf from './ResultPdf';
import { useNavigate } from 'react-router-dom';
import { FaRegSmile, FaRegFrown, FaFilePdf, FaEye, FaPlusCircle } from 'react-icons/fa';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
const Homework = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [homeworkList, setHomeworkList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const navigate = useNavigate();
  // Array containing all questions
  const [types, setTypes] = useState({});
  // console.log("typesssssssssssssssssssssss",types._id)'
  
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const questions = [
    {
      id: 'question1',
      type: 'radio',
      question: 'How many tones are there in Chinese?',
      options: ['2', '3', '4'],
      correct_answer:"4"
    },
    {
      id: 'question2',
      type: 'textarea',
      question: 'Why are tones important in Mandarin, Chinese?',
      correct_answer:"They are important because if you say a tone wrong then you are saying a different word."
    },
    {
      id: 'question3',
      type: 'textarea',
      question: 'What is Pinyin?',
      correct_answer:"Pinyin is western way of how we should pronounce the Chinese words and what it sounds like."

    },
    {
      id: 'question4',
      type: 'select',
      question: 'Match the vocab words with the English meaning:',
      matches: [
        { id: 'question4_1', phrase: 'Nǐ hǎo', englishOptions: ['I', 'You', 'Good', 'Hello'] ,correct_answer:'Hello'},
        { id: 'question4_2', phrase: 'hǎo',englishOptions: ['I', 'You', 'Good', 'Hello'] ,correct_answer:'Good'},
        { id: 'question4_3', phrase: 'Wǒ', englishOptions: ['I', 'You', 'Good', 'Hello'] ,correct_answer:'I'},
        { id: 'question4_4', phrase: 'Nǐ', englishOptions: ['I', 'You', 'Good', 'Hello'] ,correct_answer:'You'},
      ],
    },
    {
      id: 'question5',
      type: 'text',
      question: 'How do you respond to ',
      matches: [
        { id: 'question5_1', question: "Nǐ hǎo ma?",correct_answer:"How are you?"},
        { id: 'question5_2', question:"Nǐ Jiào shénme míngzì?",correct_answer:"What is your name?" },
        { id: 'question5_3', question:"Nǐ jǐ suì?",correct_answer:"How old are you?" },
        { id: 'question5_4', question: "Nǐ jiā li yǒu jī kǒu rén?",correct_answer:"How many people are in your family"},
        { id: 'question5_5', question: "Nǐ jiā li yǒu shěi?" ,correct_answer:"Who's in your family?"}
      ]
    },
    {
      id: 'question6',
      type: 'select',
      question: 'Matching the phrases:',
      matches: [
        { id: 'question6_1', phrase: 'Ní jì suí?',
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'],correct_answer:'How old are you?' },
        { id: 'question6_2', phrase: 'Nǐ jiào shénme míngzì?',
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'] ,correct_answer:'What’s your name?'},
        { id: 'question6_3', phrase: 'Nǐ jiā li yǒu shěi?',
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'],correct_answer:'Who’s in your family?' },
        { id: 'question6_4', phrase: 'Nǐ hǎo ma?', controlId: 'matchingPhrase4Select', 
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'],correct_answer:'How are you?'},
        { id: 'question6_5', phrase: 'Nǐ jiā yǒu jī kǒu rén?', controlId: 'matchingPhrase5Select', 
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'] ,correct_answer:'How many people are in your family?'},
        { id: 'question6_6', phrase: 'Wǒ __ suì', controlId: 'matchingPhrase6Select', 
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'],correct_answer:'I am x years old'},
        { id: 'question6_7', phrase: 'wǒ hěn hǎo', controlId: 'matchingPhrase7Select', 
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'], correct_answer:'I am very good'},
        { id: 'question6_8', phrase: 'Wǒjiā yǒu___kǒu rén', controlId: 'matchingPhrase8Select',
          englishOptions: ['How old are you?','What’s your name?','Who’s in your family?','How are you?','How many people are in your family?','I am x years old','I am very good','My family has _ number of people'],correct_answer:'My family has _ number of people' },
      ],
    },
  ];

  const [homeworSubmit, setHomeworkSubmit] = useState(
 

 { student_id:"",
    name:"",
    answer: []

});

  const [error, setError] = useState({ student_id:"",
    name:"",
    date: "",
    answer: []

});

  // const handleRadioChange = (option) => {
  //   setHomeworkSubmit(prevState => ({
  //     ...prevState,
  //     question1: option
  //   }));
  //   console.log("homeworSubmit", homeworSubmit);
  // };

  const handleRadioChange = (question_id, question_name, user_answer, correct_answer) => {
    console.log("question_idradio", question_id);
    setHomeworkSubmit(prevState => {
      // Check if the question_id already exists in the answers array
      const existingAnswerIndex = prevState.answer.findIndex(answer => answer.question_id === question_id);

      // Create the new answer object
      const newAnswer = {
        question_id: question_id,
        question_name: question_name,
        user_answer: user_answer,
        correct_answer: correct_answer,
        is_correct: correct_answer === user_answer
      };

      // If the question_id exists, update the existing object
      if (existingAnswerIndex >= 0) {
        const updatedAnswer = prevState.answer.map((answer, index) => 
          index === existingAnswerIndex ? newAnswer : answer
        );
        return {
          ...prevState,
          answer: updatedAnswer
        };
      }

      // If the question_id does not exist, append the new object
      return {
        ...prevState,
        answer: [...prevState.answer, newAnswer]
      };
    });
    console.log("homeworkSubmitradio", homeworSubmit);
  };

  // Helper function to get the user's answer for a specific question
  const getUserAnswer = (question_id) => {
    const answer = homeworSubmit.answer.find(answer => answer.question_id === question_id);
    return answer ? answer.user_answer : '';
  };


  // Handler to update selected value for a match
  const handleSelectChange = (matchId, value) => {
    setHomeworkSubmit(prevState => ({
      ...prevState,
      [matchId]: value
    }));
    // console.log("homeworSubmitvfdgf", homeworSubmit);
  
  };
  



  const onSubmitHomework = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_HOMEWORK_SUBMIT, "", {...homeworSubmit,student_id:types?._id})
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
          homeworkView();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
  };

  const homeworkView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){
        let res = await getRequestById(
          MANAGE_HOMEWORK_GET,
          types?._id,
          ""
        );
        if (res) {
          setHomeworkList(res.data);
          console.log("asdfghjkljhdfgh",res.data)
        }
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  
  React.useEffect(() => {
    homeworkView();
  }, [types?._id]);

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
  


      
    
      <Container >
      <Button variant="primary" onClick={handleShow} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FaPlusCircle /><span style={{ marginLeft: '8px',fontFamily:"sans-serif"}}>Do Homework</span> 
      </Button>
      <h2>Homework Result</h2>
      <Table striped bordered hover responsive="md" style={{ backgroundColor: "#7335B7",color:"#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }} >
     
          <tr >
            <th>S.No.</th>
            <th>Name</th>
            <th>Homework done Date</th>
            <th>Result</th>
          </tr>
  
        <tbody>
          {homeworkList.length>0?(
   homeworkList?.map((list, index) => (
    <tr key={list.id}>
      <td>{index + 1}</td>
      <td>{list.name}</td>
      <td>{list.createdAt}</td>
      <td><button type='button'  className='bg-info text-light border-light' onClick={()=>navigate('/dashboard/homework/result', { state: { list } })} ><FaEye/>View</button> 
      <PDFDownloadLink
                                      document={
                                        <ResultPdf list={list} />
                                      }
                                    >
                               <button className='bg-danger text-light border-light'>
                               <FaFilePdf/>Download</button>
                                  
                                    </PDFDownloadLink></td>

    </tr>
  ))
) : 
  null
}
        </tbody>
      </Table>
    </Container>
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
    <Modal show={show} onHide={handleClose} centered={true} size={"lg"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Homework Level-1</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{ maxHeight:"600px",overflowY: 'auto' }} >
        <Form onSubmit={onSubmitHomework}>
        <Form.Group as={Row} controlId="formName" className='py-2'>
          <Form.Label column sm="2">Name</Form.Label>
          <Col sm="10">
            <Form.Control required type="text"  placeholder="Enter your name"
            onChange={(e) => handleSelectChange("name", e.target.value)}
          />
          </Col>
        </Form.Group>
          {questions.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'radio' && (
                <>
                  <h4>{item.question}</h4>
                  {item.options.map((option, idx) => (
        <Form.Check
        required
          key={idx}
          type="radio"
          label={option}
          name={item.id}
          id={`${item.id}-${idx}`}
          onChange={(e) => {
            handleRadioChange(item.id,item.question,option,item.correct_answer);
        
          }}
          
        />
      ))}
                </>
              )}
              {item.type === 'textarea' && (
                <>
                  <h4>{item.question}</h4>
                  <Form.Group controlId={item.controlId}>
                    <Form.Control required as="textarea" rows={3} name={item.id} onChange={(e) => {
                    handleRadioChange(item.id,item.question,e.target.value,item.correct_answer);
                 
                  }}/>
                  </Form.Group>
                </>
              )}

{item.type === 'text' && (
                <>
                  <h4>{item.question}</h4>
                  {item.matches.map((match) => (
            <Form.Group key={match.id} as={Row} controlId={match.controlId} className='py-2'>
              <Col sm="4">
                <Form.Label>{match.question}</Form.Label>
              </Col>
              <Col sm="8">
                <Form.Control
                required
                  as="textarea"
                  name={match.id}
                  rows={1}
                  onChange={(e) => 
                    handleRadioChange(match.id,match.question,e.target.value,match.correct_answer)}
                  value={getUserAnswer(match.id) || ''}

                />
              </Col>
            </Form.Group>
          ))}
                </>
              )}


              {item.type === 'select' && (
                <>
                  <h4>{item.question}</h4>
                  {item.matches.map((match) => (
        <Form.Group key={match.id} as={Row} controlId={match.controlId} className='py-2'>
          <Col sm="4">
            <Form.Label>{match.phrase}</Form.Label>
          </Col>
          <Col sm="8" >
            <Form.Control 
            required
              as="select"
              defaultValue={""}
              onChange={(e) => handleRadioChange(match.id,match.phrase,e.target.value,match.correct_answer)}
              
              value={getUserAnswer(match.id) || ''}
            ><option value="">{"select one option"}</option>
              {match.englishOptions.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
      ))}
                </>
              )}
            </React.Fragment>
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
      
        </Container>
      </Modal>
    </>
  );
};

export default Homework;
