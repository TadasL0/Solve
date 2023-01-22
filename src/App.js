import React, { useEffect, useState } from "react";
import SideNavbar from './ui_navbar.js';
import './index.css';

function TextArea() {
  const [textboxes, setTextboxes] = useState([{ date: new Date().toDateString(), content: "" }]);
  const [inputText, setInputText] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  }

  return (
    <div>
    <SideNavbar /> 
    <div className="textareas-container">
      <textarea
        id="main-textarea"
        className="thought-input"
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
          const newTextboxes = [...textboxes];
          setTextboxes(newTextboxes);
        }}
      ></textarea>
      <div className={`chatbot-icon-container ${showChatbot ? 'show' : 'hide'}`} onClick={handleChatbotClick}>
        <img src="src\Bobber.png" alt="Chatbot Icon" className="chatbot-icon" />
      </div>
    </div>
    </div>
  );
}

export default TextArea;
