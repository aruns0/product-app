import React from "react";
import { useSelector } from "react-redux";
const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const products = useSelector((state) => state.allProducts.products);
  const categories = [];
  products.map((product) => categories.push(product.category));
  const categoriesFinal = ["All Categories", ...new Set(categories)];
  return (
    <ul className="list-group">
      {categoriesFinal.map((category) => (
        <li
          key={category}
          className={
            category === currentCategory
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => categoryChangeHandler(category, products)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
export default Categories;
