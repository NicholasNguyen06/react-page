import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import WorkComponent from './components/work/work';
import AboutComponent from './components/about/about';
import SkillsComponent from './components/skills/skills';


function App() {
  return (
    <div className="App">
      <div className="section header-section">
        <div className="section-container header-component">
          <HeaderComponent></HeaderComponent>
        </div>
      </div>
      <div className="section">
        <div className="section-container-lg">
          <AboutComponent></AboutComponent>
        </div>
        <div className="section-container-lg">
          <SkillsComponent></SkillsComponent>
        </div>
      </div>
      <div className="section section-tan">
        <div className="section-container">
          <WorkComponent></WorkComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
