import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

const PerformanceOverview = () => {
  const [timePeriod, setTimePeriod] = useState("week");
  const [selectedClass, setSelectedClass] = useState("Mandarin");
  const [selectedStudent, setSelectedStudent] = useState("Student 1");

  const studentPerformanceData = {
    Mandarin: {
      week: [80, 85, 90],
      month: [75, 80, 85],
      semester: [70, 75, 80],
      year: [65, 70, 75],
      topScorer: "Student 3",
      leastScorer: "Student 1",
    },
    Spanish: {
      week: [70, 75, 80],
      month: [65, 70, 75],
      semester: [60, 65, 70],
      year: [55, 60, 65],
      topScorer: "Student 2",
      leastScorer: "Student 3",
    },
    French: {
      week: [90, 95, 100],
      month: [85, 90, 95],
      semester: [80, 85, 90],
      year: [75, 80, 85],
      topScorer: "Student 1",
      leastScorer: "Student 3",
    },
  };

  const studentDetails = {
    "Student 1": {
      Mandarin: {
        sections: {
          Grammar: 85,
          Vocabulary: 80,
          Reading: 75,
          Writing: 90,
        },
        goodPoints: ["Writing"],
        areasToImprove: ["Reading"],
      },
      Spanish: {
        sections: {
          Grammar: 75,
          Vocabulary: 70,
          Reading: 65,
          Writing: 80,
        },
        goodPoints: ["Writing"],
        areasToImprove: ["Reading"],
      },
      French: {
        sections: {
          Grammar: 95,
          Vocabulary: 90,
          Reading: 85,
          Writing: 100,
        },
        goodPoints: ["Writing", "Grammar"],
        areasToImprove: ["Reading"],
      },
    },
    "Student 2": {
      Mandarin: {
        sections: {
          Grammar: 70,
          Vocabulary: 75,
          Reading: 80,
          Writing: 65,
        },
        goodPoints: ["Reading"],
        areasToImprove: ["Writing"],
      },
      Spanish: {
        sections: {
          Grammar: 80,
          Vocabulary: 75,
          Reading: 70,
          Writing: 85,
        },
        goodPoints: ["Writing"],
        areasToImprove: ["Grammar"],
      },
      French: {
        sections: {
          Grammar: 85,
          Vocabulary: 80,
          Reading: 75,
          Writing: 90,
        },
        goodPoints: ["Writing"],
        areasToImprove: ["Grammar"],
      },
    },
    "Student 3": {
      Mandarin: {
        sections: {
          Grammar: 90,
          Vocabulary: 85,
          Reading: 80,
          Writing: 75,
        },
        goodPoints: ["Grammar"],
        areasToImprove: ["Writing"],
      },
      Spanish: {
        sections: {
          Grammar: 70,
          Vocabulary: 65,
          Reading: 60,
          Writing: 55,
        },
        goodPoints: [],
        areasToImprove: ["All"],
      },
      French: {
        sections: {
          Grammar: 80,
          Vocabulary: 75,
          Reading: 70,
          Writing: 65,
        },
        goodPoints: ["Grammar"],
        areasToImprove: ["Writing"],
      },
    },
  };

  const classComparisonData = {
    labels: ["Mandarin", "Spanish", "French"],
    datasets: [
      {
        label: "Average Grades",
        data: [
          studentPerformanceData.Mandarin[timePeriod].reduce((a, b) => a + b) /
            studentPerformanceData.Mandarin[timePeriod].length,
          studentPerformanceData.Spanish[timePeriod].reduce((a, b) => a + b) /
            studentPerformanceData.Spanish[timePeriod].length,
          studentPerformanceData.French[timePeriod].reduce((a, b) => a + b) /
            studentPerformanceData.French[timePeriod].length,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  const handleClassChange = (className) => {
    setSelectedClass(className);
  };

  const handleStudentChange = (studentName) => {
    setSelectedStudent(studentName);
  };

  const topScorer = studentPerformanceData[selectedClass].topScorer;
  const leastScorer = studentPerformanceData[selectedClass].leastScorer;

  return (
    <Container>
      <Row>
        <Col>
          <h2>Teacher Dashboard</h2>
          <Dropdown onSelect={handleTimePeriodChange}>
            <Dropdown.Toggle variant="secondary" id="dropdown-time-period">
              {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["week", "month", "semester", "year"].map((period) => (
                <Dropdown.Item key={period} eventKey={period}>
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Individual Performance - {selectedClass}</Card.Title>
              <Line
                data={{
                  labels: ["Student 1", "Student 2", "Student 3"],
                  datasets: [
                    {
                      label: "Performance",
                      data: studentPerformanceData[selectedClass][timePeriod],
                      fill: false,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                    },
                  ],
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Class Comparison</Card.Title>
              <Bar data={classComparisonData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown onSelect={handleClassChange}>
            <Dropdown.Toggle variant="success" id="dropdown-class">
              Select Class
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Mandarin">Mandarin</Dropdown.Item>
              <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
              <Dropdown.Item eventKey="French">French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown onSelect={handleStudentChange}>
            <Dropdown.Toggle variant="info" id="dropdown-student">
              {selectedStudent}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(studentDetails).map((student) => (
                <Dropdown.Item key={student} eventKey={student}>
                  {student}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>
                {selectedStudent} - {selectedClass}
              </Card.Title>
              <h5>Performance by Section</h5>
              <Bar
                data={{
                  labels: Object.keys(
                    studentDetails[selectedStudent][selectedClass].sections
                  ),
                  datasets: [
                    {
                      label: "Scores",
                      data: Object.values(
                        studentDetails[selectedStudent][selectedClass].sections
                      ),
                      backgroundColor: "rgba(75,192,192,0.6)",
                      borderColor: "rgba(75,192,192,1)",
                      borderWidth: 1,
                    },
                  ],
                }}
              />
              <h5>Good Points</h5>
              <ul>
                {studentDetails[selectedStudent][selectedClass].goodPoints
                  .length > 0 ? (
                  studentDetails[selectedStudent][selectedClass].goodPoints.map(
                    (point, index) => <li key={index}>{point}</li>
                  )
                ) : (
                  <li>None</li>
                )}
              </ul>
              <h5>Areas to Improve</h5>
              <ul>
                {studentDetails[selectedStudent][selectedClass].areasToImprove
                  .length > 0 ? (
                  studentDetails[selectedStudent][
                    selectedClass
                  ].areasToImprove.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))
                ) : (
                  <li>None</li>
                )}
              </ul>
              <h5>Top Scorer</h5>
              <p>{topScorer}</p>
              <h5>Least Scorer</h5>
              <p>{leastScorer}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceOverview;
