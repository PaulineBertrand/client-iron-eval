import React from "react";
import { NavLink } from "react-router-dom";

import "./../../styles/nav-main.css";

const Nav = () => {
  return (
    <nav className="nav-main">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/list">list</NavLink>
    </nav>
  );
};

export default Nav;