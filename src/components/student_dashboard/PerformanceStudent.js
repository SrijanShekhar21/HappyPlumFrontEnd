import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
//import css
import "./PerformanceStudent.css";

// Hardcoded data for demonstration
const studentData = {
  studentName: "Alice",
  testReports: [
    { testName: "Test 1", score: 80 },
    { testName: "Test 2", score: 85 },
    { testName: "Test 3", score: 90 },
  ],
  coursesCompleted: 5,
  totalCourses: 10,
};

const PerformanceStudent = () => {
  const progressPercentage =
    (studentData.coursesCompleted / studentData.totalCourses) * 100;

  return (
    <div className="performanceStudentDiv">
      <h1 className="h1Student">Student Performance: {studentData.studentName}</h1>

      <div className="testReportDiv">
        <h3>Test Reports</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={studentData.testReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="testName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="courseCompletionDiv">
        <h3>Course Completion</h3>
        <p>
          Courses Completed: {studentData.coursesCompleted} /{" "}
          {studentData.totalCourses}
        </p>
        <div className="progressBar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p>{progressPercentage.toFixed(2)}% Completed</p>
      </div>
    </div>
  );
};

export default PerformanceStudent;
