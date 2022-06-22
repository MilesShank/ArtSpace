import React from "react";
import { useEffect, useState } from "react";

function Filters(props) {
  const displayFilters = () => {
    return props.categories.map((category) => {
      return (
        <div>
          <label className="switch">
            <h3>{category}</h3>
            <input type="checkbox" role="switch" id="switch" defaultChecked />
          </label>
        </div>
      );
    });
  };

  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
