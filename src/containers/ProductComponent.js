import React from "react";
import { useSelector } from "react-redux";
import { paginate } from "../utils/paginate";
const ProductComponent = ({ filter, searchQuery, pageNumber, pageSize }) => {
  const products = useSelector((state) => state.allProducts.products);
  const filteredProducts = useSelector(
    (state) => state.allProducts.filteredProducts
  );
  let searchResult;
  console.log("search query", searchQuery);
  if (searchQuery) {
    searchResult = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const paginatedProducts = paginate(products, pageNumber, pageSize);

  if (!filter && !searchQuery) {
    return paginatedProducts.map((product) => (
      //const { id, title, price, image, category } = product;

      <li>
        <div className="bag_box" key={product.id}>
          <div className="box1">
            <img src={product.image} alt={product.title} />
          </div>

          <h4>${product.price}</h4>
          <h4>{product.category}</h4>
        </div>
      </li>
    ));
  } else if (filter) {
    return products.map((product) => (
      //const { id, title, price, image, category } = product;

      <li>
        <div className="bag_box" key={product.id}>
          <div className="box1">
            <img src={product.image} alt={product.title} />
          </div>

          <h4>${product.price}</h4>
          <h4>{product.category}</h4>
        </div>
      </li>
    ));
  } else if (searchQuery) {
    return searchResult.map((product) => (
      //const { id, title, price, image, category } = product;

      <li>
        <div className="bag_box" key={product.id}>
          <div className="box1">
            <img src={product.image} alt={product.title} />
          </div>

          <h4>${product.price}</h4>
          <h4>{product.category}</h4>
        </div>
      </li>
    ));
  }
  // const { id, title } = products[0];
  //return <>{renderList}</>;
};

export default ProductComponent;

/*
!filter && products.map((product) => (
    //const { id, title, price, image, category } = product;

    <li>
      <div className="bag_box" key={product.id}>
        <div className="box1">
          <img src={product.image} alt={product.title} />
        </div>

        <h4>${product.price}</h4>
        <h4>{product.category}</h4>
      </div>
    </li>
  ));
*/
