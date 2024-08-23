import React, { useState } from "react";
import "./CustomReport.css";

// Sample hardcoded data
const studentsData = [
  {
    id: 1,
    name: "Alice",
    performance: "Excellent",
    screenTime: "5 hours",
    testScores: [90, 85, 88],
  },
  {
    id: 2,
    name: "Bob",
    performance: "Good",
    screenTime: "3 hours",
    testScores: [75, 80, 70],
  },
  // Add more students as needed
];

const CustomReport = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [performanceChecked, setPerformanceChecked] = useState(false);
  const [screenTimeChecked, setScreenTimeChecked] = useState(false);
  const [report, setReport] = useState("");

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "performance") setPerformanceChecked(checked);
    if (name === "screenTime") setScreenTimeChecked(checked);
  };

  const generateReport = () => {
    const student = studentsData.find(
      (s) => s.id === parseInt(selectedStudent)
    );
    if (!student) return;

    let reportText = `Report for ${student.name}:\n\n`;
    if (performanceChecked)
      reportText += `Performance: ${student.performance}\n`;
    if (screenTimeChecked) reportText += `Screen Time: ${student.screenTime}\n`;

    setReport(reportText);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Generate Custom Report</h1>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="studentSelect">Select Student: </label>
        <select
          id="studentSelect"
          value={selectedStudent}
          onChange={handleStudentChange}
        >
          <option value="">Select a student</option>
          {studentsData.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>
          <input
            type="checkbox"
            name="performance"
            checked={performanceChecked}
            onChange={handleCheckboxChange}
          />
          Performance
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="screenTime"
            checked={screenTimeChecked}
            onChange={handleCheckboxChange}
          />
          Screen Time
        </label>
      </div>

      <button
        onClick={generateReport}
        style={{ padding: "10px 15px", cursor: "pointer" }}
      >
        Generate Report
      </button>

      {report && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <h2>Custom Report</h2>
          <pre>{report}</pre>
        </div>
      )}
    </div>
  );
};

export default CustomReport;
