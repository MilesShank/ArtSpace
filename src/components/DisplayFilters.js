import React from "react";
import { useEffect, useState } from "react";

function Filters(props) {
  function sortByFilter(category) {}
  function displayFilters() {
    return props.categories.map((category) => {
      return category !== "18+" ? (
        <div>
          <label className="switch">
            <h3>{category}</h3>
            <input type="checkbox" role="switch" id="switch" defaultChecked />
          </label>
        </div>
      ) : (
        <div>
          <label className="switch">
            <h3>{category}</h3>
            <input type="checkbox" role="switch" id="switch" />
          </label>
        </div>
      );
    });
  }

  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
