import React from 'react';
import { Container, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import { FaChalkboardTeacher, FaChartLine, FaCalendarAlt, FaBell, FaTasks, FaCommentDots } from 'react-icons/fa';

const TeacherHome = () => {
  const welcomeMessage = "Welcome, Teacher!";
  const quickStats = {
    overallProgress: "75%",
    engagementLevel: "High",
    upcomingTasks: 3,
  };
  const recentActivities = [
    "Assignment 1 submitted by John Doe",
    "New message from Parent: Jane Smith",
    "Quiz 2 graded",
  ];
  const upcomingEvents = [
    "Math Test - July 20",
    "Parent-Teacher Conference - July 25",
    "Science Project Submission - July 30",
  ];
  const notifications = [
    "New message from Parent: John Smith",
    "Assignment 3 due tomorrow",
    "New student joined the class",
  ];

  // Styles object
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f2f5',
    },
    welcomeMessage: {
      textAlign: 'center',
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: '5px',
      padding: '10px',
    },
    card: {
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
    },
    cardBody: {
      padding: '20px',
    },
    cardTitle: {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    listItem: {
      backgroundColor: '#fff',
    },
    icon: {
      color: '#007bff',
    },
  };

  return (
    <Container style={styles.container}>
      {/* Welcome Message */}
      <Row className="my-4">
        <Col>
          <Alert variant="primary" style={styles.welcomeMessage}>
            <h4>{welcomeMessage}</h4>
            {/* <p>Here are some tips and reminders for today.</p> */}
            <p>Have a nice day.</p>
          </Alert>
        </Col>
      </Row>

      {/* Quick Stats */}
      <Row>
        <Col md={4}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>
                <FaChartLine style={styles.icon} /> Quick Stats
              </Card.Title>
              <Card.Text>Overall Progress: {quickStats.overallProgress}</Card.Text>
              <Card.Text>Engagement Level: {quickStats.engagementLevel}</Card.Text>
              <Card.Text>Upcoming Tasks: {quickStats.upcomingTasks}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Activities */}
        <Col md={4}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>
                <FaTasks style={styles.icon} /> Recent Activities
              </Card.Title>
              <ListGroup variant="flush">
                {recentActivities.map((activity, index) => (
                  <ListGroup.Item key={index} style={styles.listItem}>
                    {activity}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Upcoming Events */}
        <Col md={4}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>
                <FaCalendarAlt style={styles.icon} /> Upcoming Events
              </Card.Title>
              <ListGroup variant="flush">
                {upcomingEvents.map((event, index) => (
                  <ListGroup.Item key={index} style={styles.listItem}>
                    {event}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Notifications */}
      <Row className="my-4">
        <Col>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>
                <FaBell style={styles.icon} /> Notifications
              </Card.Title>
              <ListGroup variant="flush">
                {notifications.map((notification, index) => (
                  <ListGroup.Item key={index} style={styles.listItem}>
                    {notification}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherHome;
