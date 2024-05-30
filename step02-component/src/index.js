import React from 'react';
import ReactDOM from 'react-dom/client';
// import Library from './components/Library';
// import App from './App';
// import CommentList from './comments/CommentList';
// import UseStateCount from './mapTest/UseStateCount';
import MapKeyTest01 from './mapTest/MapKeyTest01';
import Library from './components/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    {/* <CommentList/> */}
    {/* <UseStateCount/> */}
    <MapKeyTest01/>
    <Library/>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
