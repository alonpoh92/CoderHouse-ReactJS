import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import LoaderProvider from './context/LoaderProvider';

const firebaseConfig = {
  apiKey: "AIzaSyBREsl1gh4u4Ue5ovRgUCwj9Y24APRf-fk",
  authDomain: "coderhouse-reactjs-3d926.firebaseapp.com",
  projectId: "coderhouse-reactjs-3d926",
  storageBucket: "coderhouse-reactjs-3d926.appspot.com",
  messagingSenderId: "87018493125",
  appId: "1:87018493125:web:b66951c3e82bfa3dce4cac"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
