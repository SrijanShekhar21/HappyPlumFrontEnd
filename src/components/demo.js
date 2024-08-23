import React, { useState } from 'react';
// import './MatchingGame.css';

const MatchingGame = () => {
  const [vocabList] = useState([
    { id: 1, chinese: 'Nǐ hǎo', english: 'Hello', matched: false },
    { id: 2, chinese: 'hǎo', english: 'Good', matched: false },
    { id: 3, chinese: 'Wǒ', english: 'I', matched: false },
    { id: 4, chinese: 'Nǐ', english: 'You', matched: false }
  ]);

  const [userResponses, setUserResponses] = useState(vocabList.map(item => ({
    id: item.id,
    correct: false
  })));

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text', JSON.stringify(word));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, englishWord) => {
    e.preventDefault();
    const draggedWord = JSON.parse(e.dataTransfer.getData('text'));
    if (draggedWord.english === englishWord) {
      const updatedResponses = userResponses.map(response => {
        if (response.id === draggedWord.id) {
          return { ...response, correct: true };
        }
        return response;
      });
      setUserResponses(updatedResponses);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of userResponses
    console.log("User responses:", userResponses);
    // Optionally, you can add logic to submit the responses to a server, etc.
  };

  return (
    <div className="matching-game">
      <h1>Vocabulary Matching Game</h1>
      <form onSubmit={handleSubmit}>
        <div className="vocab-container">
          {vocabList.map(word => (
            <div
              key={word.id}
              className={`vocab-item ${word.matched ? 'matched' : ''}`}
              draggable={!word.matched}
              onDragStart={(e) => handleDragStart(e, word)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, word.english)}
            >
              <span>{word.chinese}</span>
            </div>
          ))}
        </div>
        <div className="answers-container">
          {vocabList.map(word => (
            <div
              key={word.id}
              className={`answer ${word.matched ? 'matched' : ''}`}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, word.english)}
            >
              <span>{word.english}</span>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MatchingGame;
