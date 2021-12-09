import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import FirstApp from './FirstApp';

// Import CSS
import './index.css';

//const saludo = <h1>hola mundo</h1>;

const divRoot = document.querySelector('#root');

//ReactDOM.render(<FirstApp words="Hello" />, divRoot)

ReactDOM.render(<CounterApp number={5} />, divRoot)
