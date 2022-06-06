import React from "react";
import logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/");
  };
  return (
    <div className="bgcolor">
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            <img className="logo" src={logo} onClick={handleRoute}></img>
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
