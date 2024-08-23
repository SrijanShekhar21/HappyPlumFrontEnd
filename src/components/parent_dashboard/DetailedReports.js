import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Pie, Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

const DetailedReports = () => {
  // Toggle State for Time Period
  const [timePeriod, setTimePeriod] = useState("month");

  // Dummy Data
  const hoursSpentData = {
    labels: ["Listening", "Speaking", "Reading", "Writing"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#7335b7", "#A569BD", "#D2B4DE", "#E8DAEF"],
        hoverBackgroundColor: ["#5C2E91", "#8E44AD", "#BB8FCE", "#D7BDE2"],
      },
    ],
  };

  const proficiencyLevel = 85; // Overall proficiency level in %

  const scoresData = {
    labels: ["Level 1", "Level 2", "Level 3", "Level 4"],
    datasets: [
      {
        label: "Scores",
        backgroundColor: "#7335b7",
        borderColor: "#5C2E91",
        borderWidth: 1,
        hoverBackgroundColor: "#A569BD",
        hoverBorderColor: "#5C2E91",
        data: [85, 90, 80, 88],
      },
    ],
  };

  const progressOverTimeData = {
    week: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "Progress %",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#7335b7",
          borderColor: "#7335b7",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#7335b7",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#7335b7",
          pointHoverBorderColor: "#5C2E91",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [60, 65, 70, 72, 75, 80, 85],
        },
      ],
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Progress %",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#7335b7",
          borderColor: "#7335b7",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#7335b7",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#7335b7",
          pointHoverBorderColor: "#5C2E91",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [60, 65, 75, 85],
        },
      ],
    },
    semester: {
      labels: [
        "Month 1",
        "Month 2",
        "Month 3",
        "Month 4",
        "Month 5",
        "Month 6",
      ],
      datasets: [
        {
          label: "Progress %",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#7335b7",
          borderColor: "#7335b7",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#7335b7",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#7335b7",
          pointHoverBorderColor: "#5C2E91",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [55, 60, 65, 70, 75, 85],
        },
      ],
    },
    year: {
      labels: [
        "Month 1",
        "Month 2",
        "Month 3",
        "Month 4",
        "Month 5",
        "Month 6",
        "Month 7",
        "Month 8",
        "Month 9",
        "Month 10",
        "Month 11",
        "Month 12",
      ],
      datasets: [
        {
          label: "Progress %",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#7335b7",
          borderColor: "#7335b7",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#7335b7",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#7335b7",
          pointHoverBorderColor: "#5C2E91",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [50, 55, 60, 65, 70, 72, 75, 77, 80, 82, 85, 88],
        },
      ],
    },
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <h2 style={{ color: "#7335b7", marginBottom: "20px" }}>
        Detailed Report
      </h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Hours Spent by Activity</Card.Title>
              <Pie data={hoursSpentData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Curriculum Progress</Card.Title>
              <ProgressBar
                now={proficiencyLevel}
                label={`${proficiencyLevel}%`}
                variant="success"
                style={{
                  height: "30px",
                  fontSize: "18px",
                  backgroundColor: "#d9c5f0",
                }}
              />
            </Card.Body>
          </Card>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <Card.Title>Overall Proficiency Level</Card.Title>
              <h3 style={{ color: "#7335b7" }}>{proficiencyLevel}%</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Scores by Level</Card.Title>
              <Bar data={scoresData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Progress Over Time</Card.Title>
              <ButtonGroup toggle style={{ marginBottom: "15px" }}>
                <ToggleButton
                  id="week"
                  type="radio"
                  variant="outline-primary"
                  value="week"
                  checked={timePeriod === "week"}
                  onChange={(e) => setTimePeriod(e.currentTarget.value)}
                >
                  Week
                </ToggleButton>
                <ToggleButton
                  id="month"
                  type="radio"
                  variant="outline-primary"
                  value="month"
                  checked={timePeriod === "month"}
                  onChange={(e) => setTimePeriod(e.currentTarget.value)}
                >
                  Month
                </ToggleButton>
                <ToggleButton
                  id="semester"
                  type="radio"
                  variant="outline-primary"
                  value="semester"
                  checked={timePeriod === "semester"}
                  onChange={(e) => setTimePeriod(e.currentTarget.value)}
                >
                  Semester
                </ToggleButton>
                <ToggleButton
                  id="year"
                  type="radio"
                  variant="outline-primary"
                  value="year"
                  checked={timePeriod === "year"}
                  onChange={(e) => {
                    console.log(e.currentTarget.value);
                    setTimePeriod(e.currentTarget.value);
                  }}
                >
                  Year
                </ToggleButton>
              </ButtonGroup>
              <Line data={progressOverTimeData[timePeriod]} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Strengths and Weaknesses</Card.Title>
              <h5 style={{ color: "#28a745" }}>Strengths:</h5>
              <ul>
                <li>Strong Vocabulary</li>
                <li>Good Pronunciation</li>
              </ul>
              <h5 style={{ color: "#dc3545" }}>Weaknesses:</h5>
              <ul>
                <li>Needs Improvement in Writing</li>
                <li>Slow Reading Speed</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailedReports;
