import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert, Table } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import { useLocation } from 'react-router-dom';


const Result = () => {

  
  
  const [homeworkList, setHomeworkList] = useState([]);
  const location = useLocation();
  const { list } = location.state || {}; // Access the passed state
  console.log("list:",list)
  // Assuming list.answer is your array of questions
const sortedQuestions = list.answer.sort((a, b) => {
  // Extract numeric parts of question IDs
  const idA = parseInt(a.question_id.replace(/\D/g, ''), 10);
  const idB = parseInt(b.question_id.replace(/\D/g, ''), 10);

  // Compare numeric parts of IDs
  return idA - idB;
});


const countAnswers = list.answer.reduce((counts, answer) => {
  answer.is_correct? counts.correct++ : counts.wrong++;
  return counts;
}, { correct: 0, wrong: 0 });

console.log(`Correct: ${countAnswers.correct}, Wrong: ${countAnswers.wrong}`);

const data = [
  { title: 'Correct', value:countAnswers.correct, color: 'green' },
  { title: 'Wrong', value:countAnswers.wrong, color: 'red' }
];

 // Calculate total value
 const total = data?.reduce((acc, { value }) => acc + value, 0);
  return (
    <>
      <Container className={"p-5"} style={{ backgroundColor: "#5CE1E6",borderRadius:"20px", width: "80%",boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }}>
        <h1>Happy Plum Mandarin Result Level 1</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>Results Percentage</div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        {data.map(({ title, color }, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: color, marginRight: '5px' }}></div>
            <span>{title}</span>
          </div>
        ))}
      </div>
      <div style={{ width: '100%', height: '300px', position: 'relative' }}>
        <PieChart
          data={data.map(({ value, color }) => ({
            value,
            color,
            label: '',
          }))}
          label={({ dataEntry }) => `${((dataEntry.value / total) * 100).toFixed(2)}%`} // Custom label function
          lineWidth={90} // Adjust the line width for the pie chart
          labelPosition={70} // Adjust label position as needed (percentage of radius)
          labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
            fill: '#fff', // Adjust label color
          }}
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
        <Form >
        <Form.Group as={Row} controlId="formName" className='py-2'>
        <Col sm="2"><h4>Name</h4></Col>
          <Col sm="10">
            <Form.Control required type="text" value={list.name}
            
          />
          </Col>
        </Form.Group>
        
        {sortedQuestions.map((item, index) => (
  <Form.Group as={Row} controlId={`formName-${index}`} className='py-2' key={item.question_id}>
    <h3>{index+1}.{item.question_name}</h3>
    <Col sm="12">
      <Form.Control 
        required 
        type="text" 
        value={item.user_answer} 
        style={{ 
          border: item.is_correct ? '3px solid green': '3px solid red'
        }}
      />
    </Col>
  </Form.Group>
))}
        </Form>


      </Container>

    </>
  );
};

export default Result;
