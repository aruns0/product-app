import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../services/productService";
import ProductComponent from "./ProductComponent";
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./SearchComponent";
import SortComponent from "./SortComponent";
import PaginationComponent from "./PaginationComponent";
import { useEffect } from "react";
import { useState } from "react";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  //const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [noOfProducts, setNoOfProducts] = useState(4);

  const fetchProducts = (params) => {
    //console.log("calling the API" + params);
    (async () => {
      const response = await getProducts(params);
      dispatch(setProducts(response.data.products));
      setProductsPerPage(response.data.page_limit);
      setNoOfProducts(response.data.total_records);
    })();
  };
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //filter starts
  const categoryChangeHandler = (category) => {
    console.log("category", category);
    setCurrentCategory(category);
    setCurrentPage(1);
    if (category.includes("All")) {
      setCurrentCategory("");
      fetchProducts();
    } else {
      setSearchQuery(" ");
      fetchProducts(category);
    }
  };
  //filter ends

  //search
  const searchChangeHandler = (query) => {
    setCurrentCategory("");
    fetchProducts(query);
  };
  //end of search handler

  //sort
  const sortChangeHandler = (sortOrder) => {
    //setCurrentCategory("");
    //setFilter(false);
    //setSearchQuery(query);
    console.log("query" + sortOrder);
    // setParams(currentCategory + "&" + sortOrder);
    fetchProducts(currentCategory + "&" + sortOrder);
  };
  //end of sort handler

  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
    fetchProducts(currentCategory + "&page=" + (currentPage - 1));
  };
  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
    console.log("currentpage" + currentPage);
    fetchProducts(currentCategory + "&page=" + (currentPage + 1));
  };
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
    fetchProducts(currentCategory + "&page=" + page);
  };
  // End of pagination handlers

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
