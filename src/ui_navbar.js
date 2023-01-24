import React, { useState } from 'react';
import './ui_navbar.css';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-navbar">
      <div className="navbar-header">
        <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
        <div className="plus-icon" onClick={() => alert("Add new diary entry")}>
          +
        </div>
      </div>
      <div className={`navbar-container ${isOpen ? 'open' : 'closed'}`}>
        <div className="navbar-item" contentEditable={true}>Diary Entry</div>
        <div className="navbar-item" contentEditable={true}>Diary Entry</div>
        <div className="navbar-item" contentEditable={true}>Diary Entry</div>
      </div>
    </div>
  );
};

export default SideNavbar;
