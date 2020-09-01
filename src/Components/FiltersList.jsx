import React, { Component } from 'react';
import FilterItem from './FilterItem';

class FiltersList extends Component {
  render() {
    return (
      <div className="filters-list-container">
        <h2 className="filters-list-title">Filtros Ativos</h2>
        <ul className="unordered-list-filter">
          <FilterItem />
        </ul>
      </div>
    );
  }
}

export default FiltersList;
