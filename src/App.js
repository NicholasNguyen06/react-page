import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import WorkComponent from './components/work/work'

function App() {
  return (
        <div className="App">
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <WorkComponent></WorkComponent>
            </div>
          </div>
        </div>
  );
}

export default App;
