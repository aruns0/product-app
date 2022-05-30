import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./searchComponent";
import PaginationComponent from "./PaginationComponent";
import { useEffect } from "react";
import { useState } from "react";
import { setProducts, filterProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error", err));
    dispatch(setProducts(response.data));
  };
  const categoryChangeHandler = (category, filteredProducts) => {
    console.log("category", category);
    setCurrentCategory(category);
    setCurrentPage(1);

    if (category === "All Categories") {
      setFilter(false);
    } else {
      setSearchQuery(" ");
      dispatch(filterProducts(category, filteredProducts));
      setFilter(true);
    }
  };
  //search
  const searchChangeHandler = (query) => {
    setCurrentCategory("");
    setFilter(false);
    setSearchQuery(query);
  };

  //end of search handler
  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };
  // End of pagination handlers

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("product fetch products", products);
  return (
    <div className="container">
      <div className="row row-one justify-content-center">
        <SearchComponent value={searchQuery} onChange={searchChangeHandler} />
      </div>
      <div className="card">
        <hr />
        <ul className="col-md-4">
          <ProductComponent
            filter={filter}
            searchQuery={searchQuery}
            pageNumber={currentPage}
            pageSize={productsPerPage}
          />
        </ul>
      </div>
      <div className="col-md-2">
        <CategoryComponent
          currentCategory={currentCategory}
          categoryChangeHandler={categoryChangeHandler}
        />
      </div>
      <div className="row">
        <div className="col offset-md-2">
          {!searchQuery && !filter && (
            <PaginationComponent
              currentPage={currentPage}
              postsPerPage={productsPerPage}
              noOfProducts={products}
              onPreviousClick={previousClickHandler}
              onNextClick={nextClickHandler}
              onPageChange={pageChangeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
