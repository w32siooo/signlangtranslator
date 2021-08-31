
import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <div className="nav-container mb-3 mx-auto">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          {/*logo could go here */}
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
