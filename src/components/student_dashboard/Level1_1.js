import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const flashcards = [
  { word: '你好', pinyin: 'Nǐ hǎo', translation: 'Hello', color: '#FFEB3B' },
  { word: '再见', pinyin: 'Zàijiàn', translation: 'Goodbye', color: '#FF5722' },
  { word: '谢谢', pinyin: 'Xièxiè', translation: 'Thank you', color: '#8BC34A' },
  { word: '对不起', pinyin: 'Duìbùqǐ', translation: 'Sorry', color: '#03A9F4' },
];

const Level1_1 = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mb-4" style={{ color: '#4A90E2' }}>Lesson 1: Introduction to Mandarin</h2>
          <p className="lead">Welcome to your first Mandarin lesson! In this lesson, you'll learn some basic greetings and essential vocabulary.</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={12} className="text-center">
          <h3 className="mb-4" style={{ color: '#FF9800' }}>Vocabulary</h3>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {flashcards.map((card, index) => (
          <Col lg={3} md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100" style={{
              backgroundColor: card.color,
              borderRadius: '15px',
              transition: 'transform 0.3s',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <h4 style={{ fontSize: '2rem', color: '#fff' }}>{card.word}</h4>
                <p style={{ fontSize: '1.2rem', color: '#fff', margin: '10px 0' }}>{card.pinyin}</p>
                <p style={{ fontSize: '1rem', color: '#fff' }}>{card.translation}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col lg={8} className="text-center">
          <h3 className="mb-4" style={{ color: '#9C27B0' }}>Practice Your Vocabulary</h3>
          <p className="lead">Try to remember these words and their meanings. You can use the flashcards above to help you memorize them!</p>
          <Button variant="primary" size="lg" style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}>Start Practice</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Level1_1;

