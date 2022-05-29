import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>FakeCart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>contact us</li>
        <li>
          <Link to="/cart" className="cart__link">
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
