import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Buscador from './Buscador';

const firebaseConfig = {
  apiKey: "AIzaSyCiGLnGpfXNjlMq7M9BWToCAfHrioFRwus",
  authDomain: "react-app-firebase-2df87.firebaseapp.com",
  databaseURL: "https://react-app-firebase-2df87.firebaseio.com",
  projectId: "react-app-firebase-2df87",
  storageBucket: "react-app-firebase-2df87.appspot.com",
  messagingSenderId: "154016242853",
  appId: "1:154016242853:web:d7c787c45b090c0a9fc14c"
};

function App() {
    return (
      <div className="App">
      <Header/>
      <Buscador/>
      <Footer/>
      </div>)
    }
    export default App;
