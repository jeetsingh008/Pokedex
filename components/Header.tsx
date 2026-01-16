import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Pokemon name, number or type"
        />
      </div>
    </div>
  );
};

export default Header;
