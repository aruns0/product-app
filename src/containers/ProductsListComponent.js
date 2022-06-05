import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../services/productService";
import ProductsComponent from "./ProductsComponent";
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./SearchComponent";
import SortComponent from "./SortComponent";
import PaginationComponent from "./PaginationComponent";
import { useEffect } from "react";
import { useState } from "react";
import { setProducts } from "../redux/actions/productActions";
import { setProduct } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [noOfProducts, setNoOfProducts] = useState(4);
  const [isOpen, setIsOpen] = useState(false);

  const fetchProducts = (params) => {
    (async () => {
      const response = await getProducts("?" + params);
      dispatch(setProducts(response.data.products));
      setProductsPerPage(response.data.page_limit);
      setNoOfProducts(response.data.total_records);
    })();
  };

  const fetchProduct = (productId) => {
    (async () => {
      const response = await getProducts("/" + productId);
      dispatch(setProduct(response.data.product));
    })();
  };

  useEffect(() => {
    fetchProducts("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //popup
  const togglePopup = (productId) => {
    fetchProduct(productId);
    setIsOpen(!isOpen);
  };

  //popup ends

  //filter starts
  const categoryChangeHandler = (category) => {
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
          <CategoryComponent
            currentCategory={currentCategory}
            categoryChangeHandler={categoryChangeHandler}
          />
        </div>
        <SortComponent sortChangeHandler={sortChangeHandler} />

        <SearchComponent
          searchQuery={searchQuery}
          onClick={searchChangeHandler}
        />
      </nav>
      <div className="container bg-white">
        <div className="row">
          <ProductsComponent
            pageNumber={currentPage}
            pageSize={productsPerPage}
            onClick={togglePopup}
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
      <div>{isOpen && <ProductComponent handleClose={togglePopup} />}</div>
    </div>
  );
};
export default ProductsListComponent;
