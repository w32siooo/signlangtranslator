import { NavLink } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mx-auto">
    <NavLink
      to="/"
      exact
      className="nav-link text-my-own-color"
      activeClassName="router-link-exact-active text-center"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link text-my-own-color"
      activeClassName="router-link-exact-active text-center"
    >
      Profile
    </NavLink>
    <NavLink
      to="/translate"
      exact
      className="nav-link text-my-own-color"
      activeClassName="router-link-exact-active text-center"
    >
      Translate
    </NavLink>
  </div>
);

export default MainNav;
