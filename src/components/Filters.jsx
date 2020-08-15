import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { rKey } from '../services/Utils';
import {
  filterByName,
  filterByNumericValues,
  removeFilterByIndex,
} from '../actionsCreator';

const MAIOR_QUE = 'MAIOR_QUE';
const MENOR_QUE = 'MENOR_QUE';
const IGUAL = 'IGUAL';

const columns = [
  { innerText: 'Colunas', value: '' },
  { innerText: 'População', value: 'population' },
  { innerText: 'Orbital', value: 'orbital_period' },
  { innerText: 'Diâmetro', value: 'diameter' },
  { innerText: 'Rotação', value: 'rotation_period' },
  { innerText: 'Água', value: 'surface_water' },
];

const comparisons = [
  { innerText: 'Comparação', value: '' },
  { innerText: 'Maior que', value: MAIOR_QUE },
  { innerText: 'Menor que', value: MENOR_QUE },
  { innerText: 'Igual', value: IGUAL },
];

function Select(props) {
  const { options, dataTest, selected } = props;
  return (
    <select
      data-testid={dataTest || 'column-filter'}
      onChange={({ target }) => { selected(target.value); }}
    >
      {
        options.map(({ innerText, value }) => (
          <option key={rKey(value)} value={value}>{innerText}</option>
        ))
      }
    </select>
  );
}

function ActivatedFilters(props) {
  const { numberFilters, removeFilter } = props;
  return (
    <div>
      <h4>Filtros</h4>
      {
        numberFilters.map(({ column, comparison, value }, i) => (
          <p key={rKey(column)} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={() => { removeFilter(i); }}>X</button>
          </p>
        ))
      }
    </div>
  );
}

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { column: '', comparison: '', value: '' };
  }

  render() {
    const { setFilterByName, addFilterByNumericValues, numberFilters, removeFilter } = this.props;
    return (
      <div>
        <div>Header</div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={({ target }) => { setFilterByName(target.value); }}
        />
        <Select
          options={
            columns.filter(({ value }) =>
              (numberFilters.filter(({ column }) => (column === value)).length === 0),
            )
          }
          selected={(res) => { this.setState({ column: res }); }}
        />
        <Select
          options={comparisons}
          dataTest="comparison-filter"
          selected={(res) => { this.setState({ comparison: res }); }}
        />
        <input
          data-testid="value-filter"
          type="number"
          onChange={({ target }) => { this.setState({ value: target.value }); }}
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={() => { addFilterByNumericValues(this.state); }}
        >
          Filtrar
        </button>
        <ActivatedFilters numberFilters={numberFilters} removeFilter={removeFilter} />
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ numberFilters: filters.filterByNumericValues });
const mapDispatchToProps = (dispatch) => (
  {
    setFilterByName: (name) => { dispatch(filterByName(name)); },
    addFilterByNumericValues: ({ column, comparison, value }) => {
      dispatch(filterByNumericValues({ column, comparison, value }));
    },
    removeFilter: (index) => {
      dispatch(removeFilterByIndex(index));
    },
  }
);

Filters.propTypes = {
  setFilterByName: propTypes.func.isRequired,
  addFilterByNumericValues: propTypes.func.isRequired,
  removeFilter: propTypes.func.isRequired,
  numberFilters: propTypes.arrayOf(propTypes.object).isRequired,
};

ActivatedFilters.propTypes = {
  numberFilters: propTypes.arrayOf(propTypes.object).isRequired,
  removeFilter: propTypes.func.isRequired,
};

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.object),
  dataTest: propTypes.string,
  selected: propTypes.func,
};

Select.defaultProps = {
  options: [],
  dataTest: 'column-filter',
  selected: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
