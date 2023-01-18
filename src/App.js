import React, { useEffect, useState } from "react";
import { getRandomQuestion } from './questions.js'
import './index.css';

function TextArea() {
  const [textboxes, setTextboxes] = useState([{ date: new Date().toDateString(), content: "" }]);
  const [currentTextbox, setCurrentTextbox] = useState(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const lastTextbox = textboxes[textboxes.length - 1];
    if (!lastTextbox || lastTextbox.date !== currentDate) {
      setTextboxes([...textboxes, { date: currentDate, content: "" }]);
    }
  }, []);
  
  const [summaryText, setSummaryText] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  
  const generateSummary = async () => {
    const inputText = textboxes[currentTextbox].content;
    const selectedQuestion = getRandomQuestion(inputText);
    setSummaryText(selectedQuestion);
    setShowSummary(true);
  };

  const generateProbe = async () => {
    const selectedQuestion = getRandomQuestion(inputText);
    setInputText(inputText + '\n' + selectedQuestion);
    const newTextboxes = [...textboxes];
    newTextboxes[currentTextbox].content = inputText + '\n' + selectedQuestion;
    setTextboxes(newTextboxes);
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };
  const LeftArrow = () => (
    <button className="left-arrow" onClick={() => {
      if (currentTextbox > textboxes.length + 1) {
        setCurrentTextbox(currentTextbox - 1);
      }
    }}>
      {"<"}
    </button>
  );

  const RightArrow = () => (
    <button className="right-arrow" onClick={() => {
      if (currentTextbox < textboxes.length - 1) {
        setCurrentTextbox(currentTextbox + 1);
      }
    }}>
      {">"}
    </button>
  );
  
  return (
    <div className="textareas-container">
      <LeftArrow disabled={currentTextbox === 0} />
      <textarea
        id="main-textarea"
        className="thought-input"
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
          const newTextboxes = [...textboxes];
          newTextboxes[currentTextbox].content = event.target.value;
          setTextboxes(newTextboxes);
        }}
      ></textarea>
      <RightArrow disabled={currentTextbox === textboxes.length - 1} />
      <button className="generate-summary-button" onClick={generateSummary}>
        Generate Summary
      </button>
      <button className="generate-probe-button" onClick={() => {
    const selectedQuestion = getRandomQuestion(inputText);
    setInputText(inputText + selectedQuestion);
}}>
  Generate Probe
</button>
      <div className={`summary-container ${showSummary ? 'slide-in' : ''}`}>
        <textarea className="summary-textarea" value={summaryText} readOnly />
        <button
          className={`close-summary-button ${showSummary ? 'show' : 'hide'}`}
          onClick={handleCloseSummary}
        >
          Close Summary
        </button>
      </div>
    </div>
  );
}

export default TextArea;
