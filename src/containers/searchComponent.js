import React from "react";
const SearchComponent = ({ searchQuery, onClick }) => {
  let searchInput = React.createRef();
  return (
    <div className="col-lg-3 input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        ref={searchInput}
      />
      <span className="input-group-text border-0" id="search-addon">
        <i
          className="fas fa-search"
          onClick={() => onClick("name=" + searchInput.current.value)}
        ></i>
      </span>
    </div>
  );
};
export default SearchComponent;
