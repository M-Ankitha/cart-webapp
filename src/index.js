import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-Evcy1OT3liPseTbeF-teCQphVDV9pw",
  authDomain: "cart-482fa.firebaseapp.com",
  projectId: "cart-482fa",
  storageBucket: "cart-482fa.appspot.com",
  messagingSenderId: "319278149321",
  appId: "1:319278149321:web:ead3661d44d1006b14a718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

//serviceWorker.unregister();
