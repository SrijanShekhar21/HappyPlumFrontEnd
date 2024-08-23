import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const GroupMessage = () => {
    const [group, setGroup] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle group message submission to backend
        console.log({ group, subject, content });
    };

    return (
        <Container>
            <h2>Group Message</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroup">
                    <Form.Label>Group</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={group} 
                        onChange={(e) => setGroup(e.target.value)} 
                        required 
                    >
                        <option value="">Select Group</option>
                        <option value="class1">Class 1</option>
                        <option value="class2">Class 2</option>
                        {/* Add more groups or fetch from backend */}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>Send</Button>
            </Form>
        </Container>
    );
};

export default GroupMessage;
