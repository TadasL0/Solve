import React, { useEffect, useState } from "react";
import { getRandomQuestion } from './questions.js'
import './index.css';

function TextArea() {
  const [textboxes, setTextboxes] = useState([{ date: new Date().toDateString(), content: "" }]);
  const [currentTextbox, setCurrentTextbox] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const lastTextbox = textboxes[textboxes.length - 1];
    if (!lastTextbox || lastTextbox.date !== currentDate) {
      setTextboxes([...textboxes, { date: currentDate, content: "" }]);
    }
  }, []);

  const generateSummary = async () => {
    const inputText = textboxes[currentTextbox].content;
    const selectedQuestion = getRandomQuestion(inputText);
    setSummaryText(selectedQuestion);
    setShowSummary(true);
  };

  const generateProbe = async () => {
    const selectedQuestion = getRandomQuestion(textboxes[currentTextbox].content);
    const newTextboxes = [...textboxes];
    newTextboxes[currentTextbox].content = newTextboxes[currentTextbox].content + '\n' + selectedQuestion;
    setTextboxes(newTextboxes);
  };

  return (
    <div className="textareas-container">
      <button className="generate-summary-button" onClick={generateSummary}>
        Generate Summary
      </button>
      <button className="generate-probe-button" onClick={generateProbe}>
        Generate Probe
      </button>
      <div className={`summary-container ${showSummary ? 'slide-in' : ''}`}>
        <textarea className="summary-textarea" value={summaryText} readOnly />
        <button className={`close-summary-button ${showSummary ? 'show' : 'hide'}`} onClick={() => setShowSummary(false)}>
          Close Summary
        </button>
      </div>
    </div>
  );
}

export default TextArea;
