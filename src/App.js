import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Header from "./components/Navbar/Header";
import AboutUs from "./components/Navbar/AboutUs";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Menu from "./components/Menu/Menu";
import Pricing from "./components/Navbar/Pricing";

// Import the firebase functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Set up firebase configurations
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
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} db={db} />}
      <Header onShowCart={showCartHandler} />
      <div className="grid w-full h-full grid-cols-6 grid-rows-6 sm:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
