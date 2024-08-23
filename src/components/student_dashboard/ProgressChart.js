import { PieChart } from "react-minimal-pie-chart";
import React from "react";

export default function ProgressChart() {
  const data = [
    { title: "Speaking", value: 100, color: "green" },
    { title: "Listening", value: 100, color: "blue" },
    { title: "Reading", value: 40, color: "Orange" },
    { title: "Writing", value: 40, color: "red" },
  ];

  // Calculate total value
  const total = data.reduce((acc, { value }) => acc + value, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        ProgressChart
      </div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        {data.map(({ title, color }, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: color,
                marginRight: "5px",
              }}
            ></div>
            <span>{title}</span>
          </div>
        ))}
      </div>
      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <PieChart
          data={data.map(({ value, color }) => ({
            value,
            color,
            label: "",
          }))}
          label={({ dataEntry }) =>
            `${((dataEntry.value / total) * 100).toFixed(2)}%`
          } // Custom label function
          lineWidth={90} // Adjust the line width for the pie chart
          labelPosition={70} // Adjust label position as needed (percentage of radius)
          labelStyle={{
            fontSize: "5px",
            fontFamily: "sans-serif",
            fill: "#fff", // Adjust label color
          }}
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}
