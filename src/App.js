import { Routes, Route } from "react-router-dom";
import React, { useState, Fragment, useContext } from "react";
import "./index.css";
import Header from "./components/Navbar/Header";
import AboutUs from "./components/Navbar/AboutUs";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import Pricing from "./components/Navbar/Pricing";
import OrderHistoryPage from "./components/Orders/OrderHistoryPage";
import ProfilePage from "./components/Navbar/ProfilePage";
import Context from "./store/Context";


function App() {
  const {cartIsShown, showCartHandler, dropdownOpen, closeHamburger} = useContext(Context);

  return (
    <Fragment>
      {/* Cart modal that is displayed over the rest of the page */}
      {cartIsShown && <Cart onClose={() => showCartHandler(false)} />}
      <Header />
      <div className={`grid w-full h-full grid-cols-6 grid-rows-6 ${dropdownOpen === true ? 'overflow-clip' : ''}`} onClick={closeHamburger}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Currently there is no way to access this page. May need something like a dropdown on the user icon to navigate to it. */}
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
