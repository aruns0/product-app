import React from "react";
const Categories = ({ currentCategory, categoryChangeHandler }) => {
  // const products = useSelector((state) => state.allProducts.products);
  // const categories = [];
  // products.map((product) => categories.push(product.category));
  const categories = ["All Categories", "adidas", "reebok", "adizero"];
  return (
    <div className="collapse navbar-collapse" id="myNav">
      <div className="navbar-nav ">
        {categories.map((category) => (
          <a
            className="nav-link text-nowrap"
            aria-current="page"
            key={category}
            onClick={() => categoryChangeHandler("brand=" + category)}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Categories;
