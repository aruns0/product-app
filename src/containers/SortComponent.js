import React from "react";
const SortComponent = ({ onClick }) => {
  return (
    <div className="col section">
      <button
        className="btn shadow-none text-nowrap"
        type="button"
        onClick={() => onClick("sort=price&dir=asc")}
      >
        Price (Low to High)
        <i className="fa fa-fw fa-sort"></i>
      </button>

      <button
        className="btn  shadow-none text-nowrap"
        type="button"
        onClick={() => onClick("sort=price&dir=desc")}
      >
        Price (High to Low)
        <i className="fa fa-fw fa-sort"></i>
      </button>
    </div>
  );
};
export default SortComponent;
