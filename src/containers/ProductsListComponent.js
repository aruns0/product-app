import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../services/productService";
import ProductsComponent from "./ProductsComponent";
import ProductComponent from "./ProductComponent";
import ErrorComponent from "./ErrorComponent";
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./SearchProductComponent";
import SortComponent from "./SortComponent";
import PaginationComponent from "./PaginationComponent";

import { setProducts } from "../redux/actions/productActions";
import { setProduct } from "../redux/actions/productActions";
import { setError } from "../redux/actions/errorActions";

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [noOfProducts, setNoOfProducts] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(1);
  const isErrorOpen = useSelector((state) => state.error.isOpen);
  const fetchProducts = (params) => {
    (async () => {
      let response;
      try {
        response = await getProducts("?" + params);
        if (!Object.keys(response).includes("error")) {
          dispatch(setProducts(response.data.products));
          setProductsPerPage(response.data.page_limit);
          setNoOfProducts(response.data.total_records);
        } else {
          dispatch(setError(response.error));
        }
      } catch (error) {
        dispatch(setError(error));
      }
    })();
  };

  const fetchProduct = (productId) => {
    (async () => {
      let response;
      try {
        response = await getProducts("/" + productId);
        if (!Object.keys(response).includes("error")) {
          dispatch(setProduct(response.data.product));
        } else {
          dispatch(setError(response.error));
        }
      } catch (error) {
        dispatch(setError(error));
      }
    })();
  };

  useEffect(() => {
    fetchProducts("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //popup
  const productHandler = (productId) => {
    if (typeof productId === "number") fetchProduct(productId);
    setIsOpen(!isOpen);
  };

  //popup ends

  //filter starts
  const categoryChangeHandler = (category) => {
    setKey(new Date().getTime());
    setSearchQuery(" ");
    setCurrentCategory(category);
    setCurrentPage(1);
    if (category.includes("All")) {
      setCurrentCategory("");
      fetchProducts("");
    } else {
      fetchProducts(category);
    }
  };
  //filter ends

  //search
  const searchChangeHandler = (query) => {
    setCurrentCategory("");
    setSearchQuery(query);
    fetchProducts(query);
  };
  //end of search handler

  //sort
  const sortChangeHandler = (sort) => {
    setSortOrder(sort);
    fetchProducts(
      currentCategory + "&" + searchQuery + "&page=" + currentPage + "&" + sort
    );
  };
  //sort ends

  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
    fetchProducts(
      currentCategory +
        "&" +
        searchQuery +
        "&" +
        sortOrder +
        "&page=" +
        (currentPage - 1)
    );
  };

  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
    fetchProducts(
      currentCategory +
        "&" +
        searchQuery +
        "&" +
        sortOrder +
        "&page=" +
        (currentPage + 1)
    );
  };

  const pageChangeHandler = (page) => {
    setCurrentPage(page);
    fetchProducts(
      currentCategory + "&" + searchQuery + "&" + sortOrder + "&page=" + page
    );
  };
  // End of pagination handlers

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="col-lg-4">
          <CategoryComponent categoryChangeHandler={categoryChangeHandler} />
        </div>
        <SortComponent sortChangeHandler={sortChangeHandler} />
        <SearchComponent key={key} onClick={searchChangeHandler} />
      </nav>
      <div className="container bg-white">
        <div className="row">
          <ProductsComponent
            pageNumber={currentPage}
            pageSize={productsPerPage}
            onClick={productHandler}
          />
        </div>
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
      <div>{isOpen && <ProductComponent handleClose={productHandler} />}</div>
      <div>{isErrorOpen && <ErrorComponent />}</div>
    </div>
  );
};
export default ProductsListComponent;
