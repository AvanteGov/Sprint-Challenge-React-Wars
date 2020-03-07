import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"

ReactDOM.render(<App />, document.getElementById('root'));

// axios.get("https://swapi.co/api/people/")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => { 
//         console.log(err);
//     })