import React, { useState } from 'react';
import { stages } from './stages';
import './senses.css';

const Senses = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < stages[currentStage].required) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
      setSelectedItems([]);
    } else {
      setIsComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentStage(0);
    setSelectedItems([]);
    setIsComplete(false);
  };

  const renderBubbles = () => {
    return stages[currentStage].items.map((item, index) => {
      const isSelected = selectedItems.includes(item);
      const x = Math.random() * 85 + 5; // Random position between 10% and 90%
      const y = Math.random() * 70 + 5; // Random position between 10% and 90%

      return (
        <button
          key={item}
          className={`bubble ${isSelected ? 'selected' : ''}`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${index * 0.2}s`,
          }}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className="senses-quest-container">
      <div className="senses-quest-card">
        {!isComplete ? (
          <>
            <h1 className="senses-quest-title">Senses Quest</h1>
            <h2 className="stage-name">{stages[currentStage].name}</h2>
            <div className="bubble-container">
              {renderBubbles()}
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(selectedItems.length / stages[currentStage].required) * 100}%` }}
              ></div>
            </div>
            <button
              onClick={handleNextStage}
              disabled={selectedItems.length !== stages[currentStage].required}
              className="next-button"
            >
              {currentStage === stages.length - 1 ? 'Complete' : 'Next'}
            </button>
          </>
        ) : (
          <div className="completion-message">
            <h2 className="completion-title">Congratulations!</h2>
            <p className="completion-text">You've completed the Senses Quest.</p>
            <button onClick={resetGame} className="play-again-button">
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Senses;
