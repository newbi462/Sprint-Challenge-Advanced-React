import React, { useState } from 'react';

import { useStyleMode } from "../hooks/useStyleMode";

export const Navbar = () => {
  const [styleMode, setStyleMode] = useStyleMode(false);//was useState, now cutome hook
  const toggleMode = e => {
    e.preventDefault();
    setStyleMode(!styleMode);
  };
  return (
    <nav data-testid="navbar-toggle-loads" className="navbar">
      <h1
        onClick={toggleMode}
        className={styleMode ? 'toggle toggled' : 'toggle'}
      >Click me to Make it Pretty?, click again the depretty</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={styleMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
