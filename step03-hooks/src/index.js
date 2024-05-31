import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import State01 from './State01';
//import Effect01 from './Effect01';
// import Effect02 from './Effect02';
import Memo01 from './Memo01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    /*{ <App /> }*/
    // <State01/>
    // <Effect02/>
    <Memo01/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
