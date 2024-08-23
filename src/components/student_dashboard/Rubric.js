import React, { useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';

const Rubric = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // State to store user selections
  const [selections, setSelections] = useState({
    goal1: '',
    goal2: '',
    // Add more goals as needed
  });

  // Function to handle selection changes
  const handleSelectionChange = (goal, value) => {
    setSelections(prevState => ({
      ...prevState,
      [goal]: value
    }));
  };

  return (
    <Container className='p-5'>

<div>
      <h2>Happy Plum Mandarin Level 1 Post Assessment Rubric</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="date" >
        <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        {/* Add more form fields for rubric assessment */}
       <br/>
       <div>
      <Table responsive
       striped bordered hover style={{borderWidth: '4px', borderStyle: 'solid' ,maxwidth:"50%"}}>
        <thead>
          <tr>
            <th>Goals</th>
            <th>Exceeds</th>
            <th>Meets</th>
            <th>Needs improvement</th>
            <th>Problematic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shows up for class prepared each time with demonstrated interest in learning</td>
            <td><input type="radio" value="exceeds" name="goal1" onChange={() => handleSelectionChange('goal1', 'exceeds')} />Student is well
prepared for
Chinese class
every week and
has
demonstrated
clear study skills
and has retained
material from
previous class</td>
            <td><input type="radio" value="meets" name="goal1" onChange={() => handleSelectionChange('goal1', 'meets')} />Student has
forgotten some
phrases and
words from the
last class, but
with light
prompting can
recall the words
and phrases
</td>
            <td><input type="radio" value="needsImprovement" name="goal1" onChange={() => handleSelectionChange('goal1', 'needsImprovement')} />Student needs
prompting on
every phrase
and vocab and
has trouble
recalling the
meaning</td>
            <td><input type="radio" value="problematic" name="goal1" onChange={() => handleSelectionChange('goal1', 'problematic')} />Student is
unable to recall
any phrases and
words and
needs prompting
and review on
every part of
level 1
</td>
          </tr>
          <tr>
    <td>Recognizes basic characters (Reading)</td>
    <td>
      <input type="radio" value="exceeds" name="goal2" onChange={() => handleSelectionChange('goal2', 'exceeds')} />
      Student can recognize 4-6 basic characters, the English meaning, and the pinyin
    </td>
    <td>
      <input type="radio" value="meets" name="goal2" onChange={() => handleSelectionChange('goal2', 'meets')} />
      Student can recognize 3-4 basic characters, the meaning, and the pinyin
    </td>
    <td>
      <input type="radio" value="needsImprovement" name="goal2" onChange={() => handleSelectionChange('goal2', 'needsImprovement')} />
      Student can only recognize 1-3 characters, match them with the English meaning and pinyin
    </td>
    <td>
      <input type="radio" value="problematic" name="goal2" onChange={() => handleSelectionChange('goal2', 'problematic')} />
      Student is not able to recognize any basic characters, match with English or pinyin
    </td>
  </tr>
  <tr>
    <td>Responds to basic questions in Chinese and asks basic questions (listening and speaking)</td>
    <td>
      <input type="radio" value="exceeds" name="goal3" onChange={() => handleSelectionChange('goal3', 'exceeds')} />
      Student can both ask and respond correctly to all level 1 content without needing prompting
    </td>
    <td>
      <input type="radio" value="meets" name="goal3" onChange={() => handleSelectionChange('goal3', 'meets')} />
      Student can ask 1-2 phrases and respond to 2-3 phrases of level 1 content with light prompting
    </td>
    <td>
      <input type="radio" value="needsImprovement" name="goal3" onChange={() => handleSelectionChange('goal3', 'needsImprovement')} />
      Student can ask 1 question and answer 1 question of level 1 content with heavy prompting
    </td>
    <td>
      <input type="radio" value="problematic" name="goal3" onChange={() => handleSelectionChange('goal3', 'problematic')} />
      Student does not recall how to ask or respond to level 1 content without heavy prompting
    </td>
  </tr>
  <tr>
    <td>Overall
Performance
Student is on
</td>
    <td>
      <input type="radio" value="exceeds" name="goal4" onChange={() => handleSelectionChange('goal4', 'exceeds')} />
      Student is on
task each class
and shows
demonstrated
interest in
material and
continued
interest in
learning
    </td>
    <td>
      <input type="radio" value="meets" name="goal4" onChange={() => handleSelectionChange('goal4', 'meets')} />
      Student is on
task each class
and might not
demonstrate
continued
interest in
learning
materials, but is
participating
actively

    </td>
    <td>
      <input type="radio" value="needsImprovement" name="goal4" onChange={() => handleSelectionChange('goal4', 'needsImprovement')} />
      Student is not
demonstrating
interest in
learning new
material and
only participating
some of the time
    </td>
    <td>
      <input type="radio" value="problematic" name="goal4" onChange={() => handleSelectionChange('goal4', 'problematic')} />
      Student shows
no interest in
learned material
and not actively
participating
    </td>
  </tr>
  
          {/* Add more rows for other goals */}
        </tbody>
      </Table></div>
      <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </Container>
  );
};

export default Rubric;
