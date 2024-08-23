import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert, Table, Modal } from 'react-bootstrap';
import useValidation from '../../Hooks/useValidation';
import { MANAGE_TEST_ASSESSMENT_GET, MANAGE_TEST_ASSESSMENT_SUBMIT } from '../../api/server';
import { getRequestById, postRequestMethod } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { FaRegSmile, FaRegFrown, FaFilePdf, FaEye, FaPlusCircle } from 'react-icons/fa';
import ResultPdf from './ResultPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
const TestAssessments = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [testAssessmentList, setTestAssessmentList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const navigate = useNavigate();
  // Array containing all questions
  const [types, setTypes] = useState({});
  // console.log("typesssssssssssssssssssssss",types._id)'
  
  const { eventHandler } = useValidation();
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const questions = [
    {
      id: 'question1',
      type: 'radio',
      question: 'Choose the correct phrase to complete the sentence:',
      multiple_choices: [{ question_id: 'question1_1', question_name: "Nǐ hǎo ma?",options: ['Wǒ hěn hǎo', 'Hǎo', 'ma'],correct_answer:"How are you?"},
      { question_id: 'question1_2', question_name: "Nǐ jiào shénme míngzì?",options: ['Wǒ… suì', 'Wǒ jiào', 'Wǒ hěn hǎo'],correct_answer:"How are you?"},
      { question_id: 'question1_3', question_name: "nǐ jǐ suì?",options: ['Wǒ hěn hǎo', 'Wǒ jiào', 'Wǒ… suì'],correct_answer:"How are you?"},
      { question_id: 'question1_4', question_name: "nǐ jǐ suì?",options: ['Wǒ hěn hǎo', 'Wǒ jiào', 'Wǒ… suì'],correct_answer:"How are you?"}]
    },
    {
      id: 'question2',
      type: 'select',
      question: 'Match the vocab words with the English meaning:',
      matches: [
        { id: 'question7_1', phrase: 'Nǐ', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ],correct_answer:'Hello'},
        { id: 'question7_2', phrase: 'Wǒ',englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ],correct_answer:'Good'},
        { id: 'question7_3', phrase: 'Hǎo', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ] ,correct_answer:'I'},
        { id: 'question7_4', phrase: 'Nǐhǎo', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ],correct_answer:'You'},
        { id: 'question7_5', phrase: 'Zàijiàn', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ],correct_answer:'You'},
        { id: 'question7_6', phrase: 'Xuéshēng', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ] ,correct_answer:'You'},
        { id: 'question7_7', phrase: 'Lǎoshī', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ] ,correct_answer:'You'},
        { id: 'question7_8', phrase: 'Nǐ hǎo ma?', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ] ,correct_answer:'You'},
        { id: 'question7_9', phrase: 'Wǒ hěn hǎo', englishOptions: ['Good', 'You','Hello','I',
          'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
          
          'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
          
          
          ] ,correct_answer:'You'},
      
          { id: 'question7_10', phrase: 'Nǐ jiā li yǒu shéi?', englishOptions: ['Good', 'You','Hello','I',
            'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
            
            'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
            
            
            ],correct_answer:'You'},

            { id: 'question7_11', phrase: 'Nǐ jiā yǒu jǐ kǒu rén?', englishOptions: ['Good', 'You','Hello','I',
              'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
              
              'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
              
              
              ] ,correct_answer:'You'},

              { id: 'question7_12', phrase: 'Wǒ jiào…', englishOptions: ['Good', 'You','Hello','I',
                'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
                
                'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
                
                
                ] ,correct_answer:'You'},


                { id: 'question7_13', phrase: 'Nǐ jiào shénme míngzì?', englishOptions: ['Good', 'You','Hello','I',
                  'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
                  
                  'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
                  
                  
                  ],correct_answer:'You'},


                  { id: 'question7_14', phrase: 'Nǐ jǐ suì?', englishOptions: ['Good', 'You','Hello','I',
                    'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
                    
                    'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
                    
                    
                    ] ,correct_answer:'You'},

                    { id: 'question7_15', phrase: 'Wǒ jiā li yǒu…', englishOptions: ['Good', 'You','Hello','I',
                      'Teacher', 'Student', 'Goodbye', 'I am very good','How are you?',
                      
                      'I am called/ I am named', "What’s your name?", 'How old are you?', 'My family has…','How many people are in your family?','Who’s in your family?'
                      
                      
                      ] ,correct_answer:'You'},


                  
        ],
    },
    {
      id: 'question3',
      type: 'text',
      question: 'How do you respond to ',
      fill_blanks: [
        { question_id: 'question3_1', question_name: "Nǐ _____",correct_answer:"How are you?"},
        { question_id: 'question3_2',question_name:"Nǐ jiào _______ míngzì?",correct_answer:"What is your name?" },
        { question_id: 'question3_3', question_name:"Nǐ hǎo______?",correct_answer:"How old are you?" },
        { question_id: 'question3_4',question_name: "Wǒ____ hǎo.",correct_answer:"How many people are in your family"},
        { question_id: 'question3_5', question_name: "Wǒ jiào ________" ,correct_answer:"Who's in your family?"},
        { question_id: 'question3_6', question_name: "Nǐ ____suì?" ,correct_answer:"Who's in your family?"}
      ]
    }
  ];

  const [testAssessmentSubmit, setTestAssessmentSubmit] = useState(
 

 { student_id:"",
    name:"",
    answer: [

    ]

});

  const [error, setError] = useState({ student_id:"",
    name:"",
    answer: []

});

  const handleRadioChange = (question_id, question_name, user_answer, correct_answer) => {
    console.log("question_idradio", question_id);
    console.log("question_idradio", question_name);
    console.log("question_idradio", user_answer);
    console.log("question_idradio", correct_answer);

    setTestAssessmentSubmit(prevState => {
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
    console.log("test assessment", testAssessmentSubmit);
  };

  // Helper function to get the user's answer for a specific question
  const getUserAnswer = (question_id) => {
    const answer = testAssessmentSubmit.answer.find(answer => answer.question_id === question_id);
    return answer ? answer.user_answer : '';
  };


  // Handler to update selected value for a match
  const handleSelectChange = (matchId, value) => {
    setTestAssessmentSubmit(prevState => ({
      ...prevState,
      [matchId]: value
    }));
    // console.log("testAssessmentSubmitvfdgf", testAssessmentSubmit);
  
  };
  

  const validationHandler = async (e, alterName) => {
    console.log("testAssessmentSubmit", testAssessmentSubmit);
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
    setTestAssessmentSubmit({ ...testAssessmentSubmit, [e.target.name]: e.target.value });
  };




  const onSubmitHomework = (e) => {
    e.preventDefault();
    postRequestMethod(MANAGE_TEST_ASSESSMENT_SUBMIT, "", {...testAssessmentSubmit,student_id:types?._id})
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
          testAssessmentView();
          handleClose();
          // setTimeout(() => navigate("/login"), 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting login:", error);
        // Handle error
      });
    console.log("hiiiiiiiiiiiiiiiiiiii")
  };

  const testAssessmentView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){
        let res = await getRequestById(
          MANAGE_TEST_ASSESSMENT_GET,
          types?._id,
          ""
        );
        if (res) {
          setTestAssessmentList(res.data);
          console.log("asdfghjkljhdfgh",res.data)
        }
      }
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  
  React.useEffect(() => {
    testAssessmentView();
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
     
      <Modal show={show} onHide={handleClose} centered={true} size={"lg"}>
      <Container style={{ backgroundColor: "#5CE1E6" }}>
        <Modal.Header closeButton>
          <Modal.Title>Test Assessment Level-1</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight:"600px",overflowY: 'auto' }}>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form> */}
<Form onSubmit={onSubmitHomework}>
        <Form.Group as={Row} controlId="formName" className='py-2'>
          <Form.Label column sm="2">Name</Form.Label>
          <Col sm="10">
            <Form.Control required type="text"  placeholder="Enter your name"
            onChange={(e) => handleSelectChange("name", e.target.value)}
          />
          </Col>
        </Form.Group>
        {/* <Form.Group as={Row} controlId="formDate">
          <Form.Label column sm="2">Date</Form.Label>
          <Col sm="10">
            <Form.Control required type="date" onChange={(e) => handleSelectChange("date", e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formName" className='py-2'>
          <Form.Label column sm="2">Score</Form.Label>
          <Col sm="10">
            <Form.Control required type="text"  placeholder="Enter your score"
            onChange={(e) => handleSelectChange("score", e.target.value)}
          />
          </Col>
        </Form.Group> */}
        <h4>Part 1: Multiple Choice Questions:</h4>
        <h4>Choose the correct phrase to complete the sentence:</h4>
          {questions.map((question) => (
            
            <React.Fragment key={question.id}>
              {question.type === 'radio' && (


      <div key={question.id}>
      {/* <h5>{question.question}</h5> */}
      {question.multiple_choices.map((item) => (
        <div key={item.question_id}>
          <h6>{item.question_name}</h6>
          {item.options.map((option, optionIdx) => (
            <Form.Check
              required
              key={optionIdx}
              type="radio"
              label={option}
              name={item.question_id}
              id={`${item.question_id}-${optionIdx}`}
              onChange={(e) => handleRadioChange(item.question_id,item.question_name,option,item.correct_answer)}
            />
          ))}

        </div>
      ))}
    </div>
              )}
              {question.type === 'select' && (
                <>
                  <h4>{question.question}</h4>
                  {question.matches.map((match) => (
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

{question.type === 'text' && (
                <>
                  <h4>{question.question}</h4>
                  {question.fill_blanks.map((match) => (
            <Form.Group key={match.question_id} as={Row}  className='py-2'>
              <Col sm="4">
                <Form.Label>{match.question_name}</Form.Label>
              </Col>
              <Col sm="8">
                <Form.Control
                required
                  as="textarea"
                  name={match.question_id}
                  rows={1}
                  onChange={(e) => 
                    handleRadioChange(match.question_id,match.question_name,e.target.value,match.correct_answer)}
                  value={getUserAnswer(match.question_id) || ''}

                />
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
      <Container>

    <Button variant="primary" onClick={handleShow} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FaPlusCircle/><span style={{ marginLeft: '8px',fontFamily:"sans-serif"}}>Do Test/Assessment</span> 
      </Button>

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
      <td><button  className='bg-info text-light' type='button' onClick={()=>navigate('/dashboard/test-assessment/result', { state: { list } })} ><FaEye/> View</button><PDFDownloadLink
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
      <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
      {snackMessage}
    </Alert>
    </>
  );
};

export default TestAssessments;
