import { composeP } from "ramda";
import React from "react";
import { useEffect, useState, useRef } from "react";

function Filters({ activeFilters, allFilters, setActiveFilters }) {
  //checks which filters are active, displays status.
  // function handleClick(filter) {
  //   console.log(filter);
  // }
  // React.useEffect(() => {
  //   window.addEventListener("keydown", (event) => {
  //     console.log("h");
  //   });
  // }, []);

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
      console.log(clickedFilter, "working!");
      console.log(activeStatus, "activeStatus");

      let newActiveFilters = activeFilters;
      if (activeStatus) {
        newActiveFilters = newActiveFilters.filter(
          (element) => element !== clickedFilter
        );
        setActiveStatus(false);
        setActiveFilters(newActiveFilters);
      } else {
        console.log(activeFilters);
        setActiveStatus(true);
        setActiveFilters(newActiveFilters.concat([clickedFilter]));
      }
    }
    return activeStatus ? (
      <div id={filter}>
        <label for={filter} className="switch">
          <h3>{filter}</h3>
          <input
            type="checkbox"
            role="switch"
            id="switch"
            defaultChecked
            onClick={() => onCheckboxClick(filter)}
          />
        </label>
      </div>
    ) : (
      <div>
        <label className="switch">
          <h3>{filter}</h3>
          <input
            type="checkbox"
            role="switch"
            id="switch"
            defaultUnchecked
            onClick={() => onCheckboxClick(filter)}
          />
        </label>
      </div>
    );
  }
  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
