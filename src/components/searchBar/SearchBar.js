import React, { useState } from "react";
import "./SearchBar.css";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = (props) => {
  return (
    <div className={`search-container`} role="search" aria-label="Search Bar">
      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        aria-label="Search Input"
      />
      <SearchOutlined className="search-icon" aria-label="Search" />
    </div>
  );
};

export default SearchBar;
