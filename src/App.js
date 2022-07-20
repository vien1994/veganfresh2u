import "./index.css";
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIUoDfxR18I6_VwMcy8QXD_pnKrserdFg",
  authDomain: "veganfresh2u.firebaseapp.com",
  databaseURL: "https://veganfresh2u-default-rtdb.firebaseio.com",
  projectId: "veganfresh2u",
  storageBucket: "veganfresh2u.appspot.com",
  messagingSenderId: "1041425850896",
  appId: "1:1041425850896:web:b8fdaa9a30f8a5cbf12095",
  measurementId: "G-G1F5BX8209",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="grid-container">
        <div className="grid-item-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          {/* <Home /> */}
        </div>
      </div>
      {/* <div className="grid-container">
        <div className="grid-item-2">
          <Home />
        </div>
        <div className="grid-item-3">
          <Footer />
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default App;
