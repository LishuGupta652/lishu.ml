import React from 'react';

//Components Imports
import Header from './Components/Header'

// CSS Files
import './Css/App.css'
function App() {
  return (
    <div className="App">

      <Header />

      <div className="portfolio" id="portfolio">
        <div className="title"><h1>portfolio</h1></div>
        <div className="line">
          <div></div>
        </div>
        <div className="cards">

          <div className="card">
            <div className="inline">
              <h1>Title</h1>
              <h3>Img</h3>
            </div>
            <p className="desc">This is the nice desc of the technology.</p>    
          </div>
          
          <div className="card">
            <div className="inline">
                <h1>Title</h1>
                <h3>Img</h3>
            </div>
            <p className="desc">This is the nice desc of the technology.</p>
          </div>

          <div className="card">
            <div className="inline">
                <h1>Title</h1>
                <h3>Img</h3>
            </div>
            <p className="desc">This is the nice desc of the technology.</p>
          </div>

          <div className="card">
            <div className="inline">
                <h1>Title</h1>
                <h3>Img</h3>
            </div>
            <p className="desc">This is the nice desc of the technology.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
