import React from 'react';
import { Card, ListGroup, ListGroupItem, ProgressBar, Table, Form } from 'react-bootstrap';

const StudentProfile = () => {
  return (
    <Card className='m-4'>
      {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
      <Card.Body>
        <Card.Title>Student Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Class: Class Name</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <h5>Progress</h5>
          <ProgressBar now={60} label={`${60}%`} />
        </ListGroupItem>
        <ListGroupItem>
          <h5>Grades</h5>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Math</td>
                <td>A</td>
              </tr>
              <tr>
                <td>English</td>
                <td>B+</td>
              </tr>
            </tbody>
          </Table>
        </ListGroupItem>
        <ListGroupItem>
          <h5>Attendance</h5>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-07-20</td>
                <td>Present</td>
              </tr>
              <tr>
                <td>2024-07-19</td>
                <td>Absent</td>
              </tr>
            </tbody>
          </Table>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <h5>Personal Notes</h5>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add Note</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default StudentProfile;
