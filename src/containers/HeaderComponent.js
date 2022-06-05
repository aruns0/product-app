import React from "react";
import logo from "./images/logo.png";
const HeaderComponent = () => {
  return (
    <div className="bgcolor">
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            <img className="logo" src={logo}></img>
          </div>
          <div className="nav navbar-nav1">
            <a href="#" className="btn">
              Register
            </a>
            <a href="#" className="btn">
              Log In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
