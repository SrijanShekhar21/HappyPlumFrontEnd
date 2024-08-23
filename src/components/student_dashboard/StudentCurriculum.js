import React, { useState } from 'react';
import './StudentCurriculum.css'; // Import the CSS file for styling

// Sample content for each tab based on the level
const content = {
  noviceLow: {
    interpretative: "Novice Low interpretative skills description...",
    interpersonal: "Novice Low interpersonal skills description...",
    presentational: "Novice Low presentational skills description...",
    intercultural: "Novice Low intercultural skills description..."
  },
  midHigh: {
    interpretative: "Mid High interpretative skills description...",
    interpersonal: "Mid High interpersonal skills description...",
    presentational: "Mid High presentational skills description...",
    intercultural: "Mid High intercultural skills description..."
  },
  intermediateLow: {
    interpretative: "Intermediate Low interpretative skills description...",
    interpersonal: "Intermediate Low interpersonal skills description...",
    presentational: "Intermediate Low presentational skills description...",
    intercultural: "Intermediate Low intercultural skills description..."
  },
  mid: {
    interpretative: "Mid interpretative skills description...",
    interpersonal: "Mid interpersonal skills description...",
    presentational: "Mid presentational skills description...",
    intercultural: "Mid intercultural skills description..."
  },
  high: {
    interpretative: "High interpretative skills description...",
    interpersonal: "High interpersonal skills description...",
    presentational: "High presentational skills description...",
    intercultural: "High intercultural skills description..."
  },
  advancedLow: {
    interpretative: "Advanced Low interpretative skills description...",
    interpersonal: "Advanced Low interpersonal skills description...",
    presentational: "Advanced Low presentational skills description...",
    intercultural: "Advanced Low intercultural skills description..."
  },
  advancedMid: {
    interpretative: "Advanced Mid interpretative skills description...",
    interpersonal: "Advanced Mid interpersonal skills description...",
    presentational: "Advanced Mid presentational skills description...",
    intercultural: "Advanced Mid intercultural skills description..."
  },
  advancedHigh: {
    interpretative: "Advanced High interpretative skills description...",
    interpersonal: "Advanced High interpersonal skills description...",
    presentational: "Advanced High presentational skills description...",
    intercultural: "Advanced High intercultural skills description..."
  },
};

const StudentCurriculum = () => {
  const [level, setLevel] = useState('noviceLow'); // Default level
  const [activeTab, setActiveTab] = useState('interpretative'); // Default tab

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="student-curriculum">
      <h1 className="title">Student Curriculum</h1>

      <h1>Current Level: {level} </h1>

      {/* Dropdown to select the level */}
      <div className="level-selector">
        <label htmlFor="level-select">Select Level:</label>
        <select id="level-select" onChange={handleLevelChange} value={level}>
          <option value="noviceLow">Novice Low</option>
          <option value="midHigh">Mid High</option>
          <option value="intermediateLow">Intermediate Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
          <option value="advancedLow">Advanced Low</option>
          <option value="advancedMid">Advanced Mid</option>
          <option value="advancedHigh">Advanced High</option>
        </select>
      </div>

      {/* Tabs to switch between interpretative, interpersonal, presentational, and intercultural */}
      <div className="tabs">
        {['interpretative', 'interpersonal', 'presentational', 'intercultural'].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Display content based on the selected level and tab */}
      <div className="content">
        <h2 className="content-title">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
        <p>{content[level][activeTab]}</p>
      </div>
    </div>
  );
};

export default StudentCurriculum;
