import React from "react";
import style from "./SearchBar.module.css";
const SearchBar = ({ countries, searchFlags }) => {
  const handleFlags = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.common.toLowerCase().includes(search)
    );
    if (search && filteredCountries.length === 0) {
      searchFlags(filteredCountries, search);
      return;
    }
    searchFlags(filteredCountries);
  };
  return (
    <div className={style.searchBar}>
      <input
        onChange={handleFlags}
        type="text"
        placeholder="Search for countries..."
      />
    </div>
  );
};
export default SearchBar;
