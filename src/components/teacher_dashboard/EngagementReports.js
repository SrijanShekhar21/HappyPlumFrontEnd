import React, { useState } from "react";
import "./EngagementReports.css";

const EngagementReports = () => {
  const studentData = [
    {
      studentName: "Alice",
      logins: 5,
      timeSpent: "3h 20m",
      activities: [
        { type: "Lesson", count: 4 },
        { type: "Test", count: 1 },
        { type: "Homework", count: 2 },
        { type: "Flashcards", count: 3 },
      ],
    },
    {
      studentName: "Bob",
      logins: 8,
      timeSpent: "5h 45m",
      activities: [
        { type: "Lesson", count: 5 },
        { type: "Test", count: 3 },
        { type: "Homework", count: 4 },
        { type: "Flashcards", count: 2 },
      ],
    },
    {
      studentName: "Charlie",
      logins: 6,
      timeSpent: "4h 10m",
      activities: [
        { type: "Lesson", count: 3 },
        { type: "Test", count: 2 },
        { type: "Homework", count: 5 },
        { type: "Flashcards", count: 4 },
      ],
    },
  ];

  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleStudentChange = (event) => {
    const studentName = event.target.value;
    setSelectedStudents((prev) => {
      if (prev.includes(studentName)) {
        return prev.filter((name) => name !== studentName);
      } else {
        return [...prev, studentName];
      }
    });
  };

  const renderStudentActivity = (student) => (
    <div key={student.studentName} style={{ marginBottom: "20px" }}>
      <h3>{student.studentName}</h3>
      <p>Logins: {student.logins}</p>
      <p>Time Spent: {student.timeSpent}</p>
      <h4>Activities:</h4>
      <ul>
        {student.activities.map((activity, index) => (
          <li key={index}>
            {activity.type}: {activity.count} times
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>Student Activity Overview</h1>
      <label>
        Select Students:
        <select
          multiple
          value={selectedStudents}
          onChange={handleStudentChange}
        >
          {studentData.map((student) => (
            <option key={student.studentName} value={student.studentName}>
              {student.studentName}
            </option>
          ))}
        </select>
      </label>

      <div>
        {selectedStudents.length > 0 ? (
          selectedStudents.map((studentName) =>
            renderStudentActivity(
              studentData.find((student) => student.studentName === studentName)
            )
          )
        ) : (
          <p className="no-selection">
            Select students to view their activity.
          </p>
        )}
      </div>
    </div>
  );
};

export default EngagementReports;
