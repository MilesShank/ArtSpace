import React from "react";
import { useEffect, useState, useRef } from "react";

function Filters({ activeFilters, allFilters }) {
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
      return <Filter activeFilters={activeFilters} filter={filter} />;
    });
  }

  function Filter({ activeFilters, filter }) {
    const [isActive, setIsActive] = useState(activeFilters.includes(filter));

    function onCheckboxClick(filter) {
      console.log(filter, "working!");
    }
    return isActive ? (
      <div id={filter}>
        <label for={filter} className="switch">
          <h3>{filter}</h3>
          <input
            type="checkbox"
            role="switch"
            id="switch"
            defaultChecked
            onClick={() => onCheckboxClick({ filter })}
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
            onClick={() => onCheckboxClick({ filter })}
          />
        </label>
      </div>
    );
  }
  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
