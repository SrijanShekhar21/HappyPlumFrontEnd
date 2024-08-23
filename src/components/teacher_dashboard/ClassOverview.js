import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

const classOverviewData = {
  name: 'Math 101',
  roster: ['Student A', 'Student B', 'Student C'],
  recentActivities: ['Activity 1', 'Activity 2'],
  upcomingAssignments: ['Assignment 1', 'Assignment 2'],
};

const ClassOverview = () => {
  return (
    <Card className="mt-4" style={{ backgroundColor: '#e9ecef', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Card.Title>{classOverviewData.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <FaBook /> Student Roster:
            <ul>
              {classOverviewData.roster.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaCalendarAlt /> Recent Activities:
            <ul>
              {classOverviewData.recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaCalendarAlt /> Upcoming Assignments:
            <ul>
              {classOverviewData.upcomingAssignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
              ))}
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ClassOverview;
