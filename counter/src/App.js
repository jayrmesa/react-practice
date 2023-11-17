import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';

//https://randomuser.me/api

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) =>  {
    // handle success
    console.log(data);
    return JSON.stringify(data, null, 2);
  })
  .catch(err => {
    // handle error
    console.error(err);
  })
}

function App() {
   const [counter, setCounter] = useState(0);
   const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

   useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(randomData || 'No user data found'); 
    })
    
   },[]);


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
    <pre>
    {randomUserDataJSON};
    </pre>
    </div>
   )
}

export default App;
