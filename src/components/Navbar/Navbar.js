// ------- IMPORTS --------
import React from "react";
import { Link } from "react-router-dom";

// ------- CSS --------
import "./Navbar.css";

// ------- ICONS --------
import { CartWidget } from "../index";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1 className="logo">
          <Link to="/" id="logo">
            Ars Nova
          </Link>
        </h1>
      </div>
      <div className="searchbar-container">
        <input
          type="search"
          className="searchbar"
          placeholder="The quest for meaning."
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <ul style={{ listStyle: "none" }} className="navbar-list-container">
        <li className="navbar-explore">
          <Link to="/shop">Explore</Link>
        </li>
        <li className="navbar-wallet">
          <Link to="/">Connect Wallet</Link>
        </li>
        <li className="navbar-cart">
          <Link to="/cart">
            <AiOutlineShoppingCart size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
