import React, { useState, useEffect } from "react";
import axios from "axios";
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
import "./PerformanceGraphs.css";

// Hardcoded data for demonstration
const hardData = {
  classes: [
    {
      className: "Spanish",
      students: [
        { studentName: "Alice", score: 75 },
        { studentName: "Bob", score: 88 },
        { studentName: "Charlie", score: 95 },
      ],
      averageScore: 86,
    },
    {
      className: "French",
      students: [
        { studentName: "Dave", score: 67 },
        { studentName: "Eve", score: 92 },
        { studentName: "Frank", score: 85 },
      ],
      averageScore: 81,
    },
  ],
};

const PerformanceGraphs = () => {
  const [timePeriod, setTimePeriod] = useState("week");
  const [viewType, setViewType] = useState("class");
  const [selectedClass, setSelectedClass] = useState("Spanish");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [data, setData] = useState(hardData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/progress-report/${timePeriod}`
        );
        console.log("response", response);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [timePeriod]);

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
    setSelectedStudents([]); // Reset student selection when changing time period
  };

  const handleViewTypeChange = (event) => {
    setViewType(event.target.value);
    setSelectedStudents([]); // Reset student selection when changing view type
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

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

  const currentData =
    data?.classes?.reduce(
      (acc, curr) => ({ ...acc, [curr.className]: curr }),
      {}
    ) || {};

  const renderStudentComparisonChart = () => {
    const students = currentData[selectedClass]?.students || [];
    const filteredStudents = students.filter((student) =>
      selectedStudents.includes(student.studentName)
    );

    return filteredStudents.length > 0 ? (
      <div className="studentComparisonDiv">
        <h3>Student Comparison: {timePeriod}</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredStudents}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="studentName" />
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
    ) : (
      <p>Select students to compare.</p>
    );
  };

  const renderClassComparisonChart = () => {
    const classData = Object.keys(currentData).map((className) => ({
      className,
      ...currentData[className],
    }));

    return (
      <div className="classComparisonDiv">
        <h3>Class Comparison: {timePeriod}</h3>
        {classData.map(({ className, students, averageScore }) => (
          <div key={className} style={{ marginBottom: "40px" }}>
            <h4>{className}</h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={students}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="studentName" />
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
            <h5>Average Score: {averageScore}</h5>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="performanceGraphsDiv">
      <h1 className="h1Graphs">Performance Overview</h1>
      <div className="selectDivPerformance">
        <label>
          Time Period:
          <select value={timePeriod} onChange={handleTimePeriodChange}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="semester">Semester</option>
            <option value="year">Year</option>
          </select>
        </label>

        <label>
          View Type:
          <select value={viewType} onChange={handleViewTypeChange}>
            <option value="class">Class Comparison</option>
            <option value="student">Individual Students</option>
          </select>
        </label>

        {viewType === "class" ? (
          <label>
            Select Class:
            <select value={selectedClass} onChange={handleClassChange}>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </label>
        ) : (
          <>
            <label>
              Select Students:
              <select
                multiple
                value={selectedStudents}
                onChange={handleStudentChange}
              >
                {currentData[selectedClass]?.students.map((student) => (
                  <option key={student.studentName} value={student.studentName}>
                    {student.studentName}
                  </option>
                ))}
              </select>
            </label>
            <div>Selected Students: {selectedStudents.join(", ")}</div>
          </>
        )}
      </div>

      {viewType === "class"
        ? renderClassComparisonChart()
        : renderStudentComparisonChart()}
    </div>
  );
};

export default PerformanceGraphs;
