import React, { useState } from 'react';
import './App.css';

function App() {
   const [counter, setCounter] = useState(0);

   return(
    <div className = "App">
      <h1> Hello In Counting </h1>
      <h2> Show me the numbahs </h2>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase Counters
      </button>
    </div>
   )
}

export default App;
