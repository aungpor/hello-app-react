import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Example from './StateHook'
import Prop from './Prop'
import App from './App'
import PropTwo from './PropTwo';
import Promise from './Promise'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Example/> */}
    {/* <Prop/> */}
    <App/>
    {/* <PropTwo/> */}
    {/* <Promise/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
