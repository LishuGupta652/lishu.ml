import React from 'react';

import PageProgress from 'react-page-progress'
//Components Imports
import Header from './Components/Header'
import Skills from './Components/Skills'
import Works from './Components/Works'

// CSS Files
import './Css/App.css'
function App() {
  return (
    <div className="App">
      <PageProgress color={'skyblue'} height={5} />
      <Header />
      <Skills /> 
      <Works />

    </div>
  );
}

export default App;
