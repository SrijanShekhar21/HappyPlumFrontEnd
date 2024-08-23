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

const data = [
  { date: "2024-07-01", reading: 85, listening: 80, speaking: 75, writing: 90 },
  { date: "2024-07-08", reading: 88, listening: 85, speaking: 78, writing: 92 },
  { date: "2024-07-15", reading: 90, listening: 87, speaking: 82, writing: 95 },
  // Add more data points as needed
];

const ProgressGraph = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="reading" stroke="#8884d8" />
      <Line type="monotone" dataKey="listening" stroke="#82ca9d" />
      <Line type="monotone" dataKey="speaking" stroke="#ffc658" />
      <Line type="monotone" dataKey="writing" stroke="#ff7300" />
    </LineChart>
  </ResponsiveContainer>
);

export default ProgressGraph;
