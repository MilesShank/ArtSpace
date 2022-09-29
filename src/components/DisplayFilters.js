import React from "react";
import { useEffect, useState, useRef } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";

import "../filters.css";

function Filters({ activeFilters, allFilters, setActiveFilters }) {
  //checks which filters are active, displays status.

  function displayFilters() {
    return allFilters.map((filter) => {
      return (
        <Filter
          activeFilters={activeFilters}
          filter={filter}
          setActiveFilters={setActiveFilters}
        />
      );
    });
  }

  function Filter({ activeFilters, filter }) {
    const [activeStatus, setActiveStatus] = useState(
      activeFilters.includes(filter)
    );

    function onCheckboxClick(clickedFilter) {
      let newActiveFilters = activeFilters;
      if (activeStatus) {
        newActiveFilters = newActiveFilters.filter(
          (element) => element !== clickedFilter
        );
        setActiveStatus(false);
        setActiveFilters(newActiveFilters);
      } else {
        setActiveStatus(true);
        setActiveFilters(newActiveFilters.concat([clickedFilter]));
      }
    }
    return (
      <div id={filter + "div"} className="filterContainer">
        <input
          id={filter}
          type="checkbox"
          checked={activeStatus}
          label={filter}
          onChange={() => onCheckboxClick(filter)}
          class="bp4-large"
          className="filterBox"
        />
        <label className="filterLabel" for={filter}>
          <text>{filter}</text>
        </label>
      </div>
    );
  }
  return (
    <section className="filtersContainer">
      <text className="filterTitle">Filters</text>
      {displayFilters()}
    </section>
  );
}

export default Filters;
