import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/homeComponent.css";

const HomeComponent = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/products");
  };
  return (
    <div className="container-fluid px-0">
      <header>
        <div className="shape"></div>
        <nav className="navbar  navbar-transparent">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>{" "}
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-side">
              <img
                src="https://i.imgur.com/jrRBTai.png"
                className="w-100"
              ></img>
            </div>
            <div className="col-md-6 right-side">
              <h1>SPORTS SHOES</h1> <p>FREE DELIVERY</p>
              <div className="text-center">
                <button className="btn order-button" onClick={handleRoute}>
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeComponent;
