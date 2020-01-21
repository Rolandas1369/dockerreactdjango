import React from 'react';
import axios from 'axios';
import './app.css';

function handleSubmit(event) {
  

  axios
    .get(`/api/todos`).then(({data}) => {
      data.forEach(element => {
        console.log(element.title)
      })
    })
    .catch(err => console.log(err))
}



const App = () => {
    return (
      <div onLoad={handleSubmit()}>
        
        <h1>Hellos</h1>
      </div>
    );
  };
  
  export default App;