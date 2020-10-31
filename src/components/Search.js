import React from 'react';

const Search = () => {
  return (
    <form className="container pt-3">
      <input
        type="text"
        name="search-integrations"
        className="form-control search-bar"
        placeholder="&#xf002;  Search integrations"
      />
    </form>
  );
};

export default Search;
