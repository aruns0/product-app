import React from "react";
const SortComponent = ({ sortChangeHandler }) => {
  return (
    <div className="col-lg-5">
      <button
        name="lowToHigh"
        className="btn shadow-none text-nowrap"
        type="button"
        onClick={() => sortChangeHandler("sort=price&dir=asc")}
      >
        Price (Low to High)
        <i className="fa fa-fw fa-sort"></i>
      </button>

      <button
        className="btn  shadow-none text-nowrap"
        type="button"
        onClick={() => sortChangeHandler("sort=price&dir=desc")}
      >
        Price (High to Low)
        <i className="fa fa-fw fa-sort"></i>
      </button>
    </div>
  );
};
export default SortComponent;
