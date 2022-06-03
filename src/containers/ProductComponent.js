import React from "react";
import { useSelector } from "react-redux";
import { paginate } from "../utils/paginate";
const ProductComponent = ({ pageNumber, pageSize }) => {
  const products = useSelector((state) => state.allProducts.products);
  const paginatedProducts = paginate(products, pageNumber, pageSize);
  console.log("paginated products", products);
  return products.map((product) => (
    <div
      className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3"
      key={product.id}
    >
      <div className="product">
        <img src={product.url} alt={product.url} />
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
          <li className="icon">
            <span className="fas fa-expand-arrows-alt"></span>
          </li>
          <li className="icon mx-3">
            <span className="far fa-heart"></span>
          </li>
          <li className="icon">
            <span className="fas  fa-shopping-bag"></span>
          </li>
        </ul>
      </div>
      <div className="title pt-4 pb-1">{product.category}</div>
      <div className="d-flex align-content-center justify-content-center">
        <span className="fas fa-star"></span>{" "}
        <span className="fas fa-star"></span>{" "}
        <span className="fas fa-star"></span>{" "}
        <span className="fas fa-star"></span>{" "}
        <span className="fas fa-star"></span>{" "}
      </div>
      <div class="title pt-4 pb-1">{product.name}</div>
      <div className="price">${product.price}</div>
    </div>
  ));
};

export default ProductComponent;
