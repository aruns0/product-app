import React from "react";
const SearchComponent = ({ onClick }) => {
  let searchInput = React.createRef();
  return (
    <div className="col-sm-6">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            ref={searchInput}
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClick("name=" + searchInput.current.value)}
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};
export default SearchComponent;
