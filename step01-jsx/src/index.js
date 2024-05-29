import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Hello(){
  return (
    <React.Fragment>
    <h2>첫 test 입니다</h2>
    <h3>하하</h3>
    <App/>
    </React.Fragment>
  )
}

function Menu(){
  return (
    <>
    <h3>점심 뭐 먹지?</h3>
    <h4>글쎄?</h4>
    </>
  )
}


root.render(
  <React.StrictMode>
    <Hello />
   
    <Menu/>
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
