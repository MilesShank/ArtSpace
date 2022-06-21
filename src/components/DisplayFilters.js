import React from "react";
import { useEffect, useState } from "react";
//we're going to do an API call to return all the unique values from the category column.
function Filters(props) {
  const displayFilters = () => {
    return props.categories.map((category) => {
      return (
        <label className="switch">
          <h4>{category}</h4>
          <input type="checkbox" role="switch" id="switch" />
        </label>
      );
    });
  };

  return <div className="filtersContainer">{displayFilters()}</div>;
}

export default Filters;
