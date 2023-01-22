import React, { useEffect, useState } from "react";
import './index.css';

function TextArea() {
  const [textboxes, setTextboxes] = useState([{ date: new Date().toDateString(), content: "" }]);
  const [currentTextbox, setCurrentTextbox] = useState(0);
  const [inputText, setInputText] = useState("");
  
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
    </div>
  );
}

export default TextArea;
