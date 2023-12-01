// src/App.js

import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';
import "./App.css"
function App() {
  return (
    <div className="App">
      <h1>Your React App</h1>
      <div className='api'>
      <YouTubeEmbed />
      </div>
    </div>
  );
}

export default App;
