import React, { useState } from "react";
import "./StudentChats.css"; // Assuming you create a separate CSS file for styles

const StudentChats = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const teachers = ["Mr. Smith", "Ms. Johnson", "Mr. Lee"];
  const classmates = ["Classmate 1", "Classmate 2", "Classmate 3"];
  const parent = "Parent"; // Fixed parent

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatLog([...chatLog, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="student-chats-container">
      {!selectedOption && (
        <div className="selection-container">
          <h3 className="selection-heading">Who do you want to chat with?</h3>
          <div className="button-group">
            <button className="selection-button" onClick={() => setSelectedOption("teacher")}>
              Teacher
            </button>
            <button className="selection-button" onClick={() => setSelectedOption("classmate")}>
              Classmate
            </button>
            <button
              className="selection-button"
              onClick={() => {
                setSelectedOption("parent");
                setSelectedPerson(parent);
              }}
            >
              Parent
            </button>
          </div>
        </div>
      )}

      {selectedOption && !selectedPerson && (
        <div className="specific-selection-container">
          <h3 className="selection-heading">Select {selectedOption}</h3>
          <div className="button-group">
            {selectedOption === "teacher" &&
              teachers.map((teacher) => (
                <button
                  className="selection-button"
                  key={teacher}
                  onClick={() => setSelectedPerson(teacher)}
                >
                  {teacher}
                </button>
              ))}
            {selectedOption === "classmate" &&
              classmates.map((classmate) => (
                <button
                  className="selection-button"
                  key={classmate}
                  onClick={() => setSelectedPerson(classmate)}
                >
                  {classmate}
                </button>
              ))}
          </div>
        </div>
      )}

      {selectedPerson && (
        <div className="chat-container">
          <h3 className="chat-heading">Chatting with {selectedPerson}</h3>
          <div className="chat-window">
            {chatLog.map((entry, index) => (
              <div key={index} className="chat-message">
                <strong>{entry.sender}:</strong> {entry.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="chat-input"
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentChats;
