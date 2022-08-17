import React from "react";
import logo from "../../images/frumatic-logo-dark.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light nav-fill w-100">
      <div className="navbar-brand mx-5">
        <img src={logo} width="150" alt="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
