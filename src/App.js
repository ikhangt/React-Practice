import React from 'react';
import Toggle from './Toggle';
import './App.css';
import formatDistance from 'date-fns/formatDistance';

function App() {
  const a = [0,1,2];
  return (
    <div className="App">
      <header className="App-header">
        
        
  <div>{formatDistance(new Date(), new Date(), { addSuffix: true })}</div>
      </header>
    </div>
  );
}

export default App;
