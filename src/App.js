import React, { useEffect, useState } from "react";
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
        <img src="https://your-s3-bucket.s3.amazonaws.com/chatbot_icon.jpg" alt="Chatbot Icon" className="chatbot-icon" />
      </div>
    </div>
  );
}

export default TextArea;
