import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./searchComponent";
import SortComponent from "./SortComponent";
import PaginationComponent from "./PaginationComponent";
import { useEffect } from "react";
import { useState } from "react";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //const [filter, setFilter] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  //const [params, setParams] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [noOfProducts, setNoOfProducts] = useState(4);

  //console.log("global" + params);
  const fetchProducts = async (query, category, page, sort) => {
    var params = "";
    console.log("inside fetch products" + params);
    if (query) params = params + query;
    if (category) params = params + category;
    if (page) params = params + page;
    if (sort) params = params + sort;
    console.log("calling the API" + params);

    const url = "http://localhost:3000/api/v1/products?" + params;
    console.log(url);
    const response = await axios
      .get(url, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhcHBsaWNhdGlvbl9pZCI6IjEyM2U0NTY3LWU4OWItMTJkMy1hNDU2LTQyNjY1NTQ0MDAwMCIsImV4cCI6MTY1NDE4MjM4OX0.jasvTpNGzqqkbIkVF6kGFsUoYt2Bdi0TOn6g2ylsW5Q",
        },
      })
      .catch((error) => console.log("error", error));
    dispatch(setProducts(response.data.products));
    setProductsPerPage(response.data.page_limit);
    setNoOfProducts(response.data.total_records);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //filter starts
  const categoryChangeHandler = (category) => {
    console.log("category", category);
    setCurrentCategory(category);
    setCurrentPage(1);

    if (category.includes("All")) {
      setCurrentCategory("");
      fetchProducts();

      //setParams("");
      // setFilter(false);
    } else {
      setSearchQuery(" ");
      fetchProducts(null, category);
      //setParams(category);
      //setFilter(true);
    }
  };

  //filter ends

  //search
  const searchChangeHandler = (query) => {
    setCurrentCategory("");
    //setFilter(false);
    //setSearchQuery(query);
    console.log("query" + query);
    fetchProducts(query);
    // setParams(query);
  };

  //end of search handler

  //search
  const sortChangeHandler = (sortOrder) => {
    //setCurrentCategory("");
    //setFilter(false);
    //setSearchQuery(query);
    console.log("query" + sortOrder);
    // setParams(currentCategory + "&" + sortOrder);
    fetchProducts(null, null, null, currentCategory + "&" + sortOrder);
  };

  //end of search handler

  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
    fetchProducts(null, null, currentCategory + "&page=" + (currentPage - 1));
  };
  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
    console.log("currentpage" + currentPage);
    fetchProducts(null, null, currentCategory + "&page=" + (currentPage + 1));
  };
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
    fetchProducts(null, null, currentCategory + "&page=" + page);
  };
  // End of pagination handlers

  console.log("product fetch products", products);
  return (
    <div className="container bg-white">
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col section">
              <CategoryComponent
                currentCategory={currentCategory}
                categoryChangeHandler={categoryChangeHandler}
              />
            </div>
            <SearchComponent onClick={searchChangeHandler} />
            <SortComponent onClick={sortChangeHandler} />
          </div>
        </div>
      </nav>
      <div className="row">
        <ProductComponent pageNumber={currentPage} pageSize={productsPerPage} />
      </div>
      <div className="row">
        <div className="col offset-sm-9">
          {
            <PaginationComponent
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              noOfProducts={noOfProducts}
              onPreviousClick={previousClickHandler}
              onNextClick={nextClickHandler}
              onPageChange={pageChangeHandler}
            />
          }
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
