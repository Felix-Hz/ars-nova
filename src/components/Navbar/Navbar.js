import React from "react";
import "./Navbar.css";

// ------- ICONS --------
import { CartWidget } from "../index";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1 className="logo">
          <a href="/" id="logo">
            Ars Nova
          </a>
        </h1>
      </div>
      <div className="searchbar-container">
        <input type="search" className="searchbar" placeholder="The quest for meaning." />
        <AiOutlineSearch className="search-icon" />
      </div>
      <ul style={{ listStyle: "none" }} className="navbar-list-container">
        <li className="navbar-explore">
          <a href="/">Explore</a>
        </li>
        <li className="navbar-wallet">
          <a href="/">Connect Walllet</a>
        </li>
        <li className="navbar-cart">
          <a href="/">
            <CartWidget />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
