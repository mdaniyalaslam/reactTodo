import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkhH4uLWHVBCVd5wtIvK6l6p9BLTZXBLs",
    authDomain: "todo-app-2411f.firebaseapp.com",
    databaseURL: "https://todo-app-2411f.firebaseio.com",
    projectId: "todo-app-2411f",
    storageBucket: "todo-app-2411f.appspot.com",
    messagingSenderId: "213722828277"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
