import React from "react";
const SearchComponent = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="search"
        value={value}
        className="form-control form-control-lg"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default SearchComponent;
