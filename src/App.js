import React, { useState } from "react";
import SideNavbar from './ui_navbar.js';
import './index.css';

function TextArea() {
  const [inputText, setInputText] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  }

  return (
    <div>
    <SideNavbar /> 
    <div className="textarea-container">
      <textarea
        id="main-textarea"
        className="thought-input"
        value={inputText}
        onChange={event => setInputText(event.target.value)}
      ></textarea>
      <div className={`chatbot-icon-container ${showChatbot ? 'show' : 'hide'}`} onClick={handleChatbotClick}>
        <img src="images\chatbot_icon.jpg" alt="Chatbot Icon" className="chatbot-icon" />
      </div>
    </div>
    </div>
  );
}

export default TextArea;
