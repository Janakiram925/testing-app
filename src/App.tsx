import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './Components/application/application';
import { Skills } from './Components/skills/skills';

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  return (
    <div className="App">
      <Application />
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
