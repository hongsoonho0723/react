import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxTest from './JsxTest';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Hello(){
//   return (
//     <React.Fragment>
//     <h2>첫 test 입니다</h2>
//     <h3>하하</h3>

//     </React.Fragment>
//   )
// }

// function Menu(){
//   return (
//     <>
//     <h3>점심 뭐 먹지?</h3>
//     <h4>글쎄?</h4>
//     </>
//   )
// }


root.render(
  <React.StrictMode>
    {/* <Hello />
   
    <Menu/> */}
    <App></App>
    <JsxTest/>
  
  </React.StrictMode>
);


reportWebVitals();
