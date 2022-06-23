import React from "react";
import { useEffect, useState } from "react";

function Filters(props) {
  //checks which filters
  function displayFilters() {
    return props.allFilters.map((filter) => {
      return props.activeFilters.includes(filter) ? (
        <div>
          <label className="switch">
            <h3>{filter}</h3>
            <input type="checkbox" role="switch" id="switch" defaultChecked />
          </label>
        </div>
      ) : (
        <div>
          <label className="switch">
            <h3>{filter}</h3>
            <input type="checkbox" role="switch" id="switch" />
          </label>
        </div>
      );
    });
  }

  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
