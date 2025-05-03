// src/MainContent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MainContent() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`p-5 ${darkMode ? 'text-bg-light' : 'text-bg-dark'}`}>
      <h1>Welcome to the Theme Toggle App</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, adipisci?</p>
    </div>
  );
};

export default MainContent;