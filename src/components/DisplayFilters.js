import React from "react";
import { useEffect, useState, useRef } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Switch } from "@blueprintjs/core";

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
    // <Switch checked={this.state.isPublic} label="Public" onChange={this.handlePublicChange} />
    return (
      <div id={filter} className="filterContainer">
        <Switch
          checked={activeStatus}
          label={filter}
          onChange={() => onCheckboxClick(filter)}
          class="bp4-large"
        />
      </div>
    );
  }
  return <section className="filtersContainer">{displayFilters()}</section>;
}

export default Filters;
