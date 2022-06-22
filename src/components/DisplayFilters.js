import React from "react";
import { useEffect, useState } from "react";

function Filters(props) {
  const displayFilters = () => {
    return props.categories.map((category) => {
      return (
        <label className="switch">
          <h3>{category}</h3>
          <input type="checkbox" role="switch" id="switch" />
        </label>
      );
    });
  };

  return <div className="filtersContainer">{displayFilters()}</div>;
}

export default Filters;
