import React from "react";
import { useSelector } from "react-redux";
import "./css/productComponent.css";
const Popup = (props) => {
  const product = useSelector((state) => state.product.product);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="row m-0">
          <div className="col-lg-4 left-side-product-box pb-3">
            <img src={product.url} className="border p-3" />
            <span className="sub-img">
              <img src={product.url} className="border p-2" />
              <img src={product.url} className="border p-2" />
              <img src={product.url} className="border p-2" />
            </span>
          </div>
          <div className="col-lg-8">
            <div className="right-side-pro-detail border p-3 m-0">
              <div className="row">
                <div className="col-lg-12">
                  <p className="m-0 p-0">{product.brand}</p>
                  <p className="m-0 p-0">{product.name}</p>
                </div>
                <div className="col-lg-12">
                  <p className="m-0 p-0 price-pro">${product.price}</p>
                  <hr className="p-0 m-0" />
                </div>
                <div className="col-lg-12 pt-2">
                  <h5>Product Detail</h5>
                  <span>{product.description}</span>
                  <hr className="m-0 pt-2 mt-2" />
                </div>
                <div className="col-lg-12">
                  <p className="tag-section">
                    <strong>Tag : </strong>
                    <a href="">Women</a>
                    <a href="">,Men</a>
                    <a href="">,Girls</a>
                    <a href="">,Boys</a>
                  </p>
                </div>
                <div className="col-lg-12">
                  <h6>Quantity :</h6>
                  <input
                    type="number"
                    className="form-control text-center w-100"
                    value="1"
                  />
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="row">
                    <div className="col-lg-6 pb-2">
                      <a href="#" className="btn btn-danger w-100">
                        Add To Cart
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="#" className="btn btn-success w-100">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
