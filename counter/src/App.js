import React, { useState } from 'react';
import axios from "axios"
import './App.css';

//https://randomuser.me/api

function App() {
   const [counter, setCounter] = useState(0);

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(res =>  {
    // handle success
    console.log(res);
    return res;
  })
  .catch(err => {
    // handle error
    console.error(err);
  })
}


   return(
    <div className = "App">
      <h1> Hello In Counting </h1>
      <h2> Show me the numbahs </h2>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase Counter
      </button>
      <button onClick={() => {
        fetchRandomData();
      }}>fetch Data
      </button>
    </div>
   )
}

export default App;
