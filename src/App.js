import React, { useEffect, useState } from "react";
import Navbar from './Navbar'; //import the navbar component
import './index.css';

function TextArea() {
  const [textboxes, setTextboxes] = useState([{ date: new Date().toDateString(), content: "" }]);
  const [currentTextbox, setCurrentTextbox] = useState(0);
  const [inputText, setInputText] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  }

  return (
    <div>
    <Navbar /> //render the navbar component
    <div className="textareas-container">
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
      <div className={`chatbot-icon-container ${showChatbot ? 'show' : 'hide'}`} onClick={handleChatbotClick}>
        <img src="https://ibb.co/1v7bb7n" alt="Chatbot Icon" className="chatbot-icon" />
      </div>
    </div>
    </div>
  );
}

export default TextArea;
