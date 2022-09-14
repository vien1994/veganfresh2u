import { Routes, Route } from "react-router-dom";
import React, { useState, Fragment, useContext } from "react";
import "./index.css";
import Header from "./components/Navbar/Header";
import AboutUs from "./components/Navbar/AboutUs";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import Merch from "./components/Navbar/Merch";
import OrderHistoryPage from "./components/Orders/OrderHistoryPage";
import ProfilePage from "./components/Navbar/ProfilePage";
import Context from "./store/Context";
import PantryMenu from "./components/Menu/PantryMenu";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  const {
    cartIsShown,
    showCartHandler,
    dropdownOpen,
    closeHamburger,
    isLoading,
  } = useContext(Context);

  return (
    <Fragment>
      {/* Show Loading Animation or Not - Currently used when placing an order before the Stripe Checkout loads*/}
      {isLoading === true ? <Loading /> : null}

      {/* Cart modal that is displayed over the rest of the page */}
      {cartIsShown && <Cart onClose={() => showCartHandler(false)} />}
      <Header />
      <div
        className={`grid w-full h-full grid-cols-6 grid-rows-3  ${
          dropdownOpen === true ? "overflow-clip" : ""
        }`}
        onClick={closeHamburger}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pantry" element={<PantryMenu />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
