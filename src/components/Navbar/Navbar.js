import React from "react";
import { CartWidget } from "../index";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1 className="logo">
          <a href="/">Ars Nova</a>
        </h1>
      </div>
      <div className="searchbar-container">
        <input className="searchbar" placeholder="The quest for meaning." />
        <AiOutlineSearch className="search-icon" />
      </div>
      <h3 className="navbar-explore">
        <a href="/">Explore</a>
      </h3>
      <h3 className="navbar-wallet">
        <a href="/">Connect Walllet</a>
      </h3>
      <CartWidget />
    </div>
  );
};

export default Navbar;
