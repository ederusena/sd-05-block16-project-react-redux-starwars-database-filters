import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TBody extends Component {

  render() {
    const { planetas, names } = this.props;
    return (
      <tbody>
        {planetas
        .filter((planeta) => planeta.name.includes(names))
        .map((planeta) => (
          <tr>
            <td>{planeta.name}</td>
            <td>{planeta.rotation_period}</td>
            <td>{planeta.orbital_period}</td>
            <td>{planeta.diameter}</td>
            <td>{planeta.climate}</td>
            <td>{planeta.gravity}</td>
            <td>{planeta.terrain}</td>
            <td>{planeta.surface_water}</td>
            <td>{planeta.population}</td>
            <td>{planeta.films}</td>
            <td>{planeta.created}</td>
            <td>{planeta.edited}</td>
            <td>{planeta.url}</td>
          </tr>
        ),
        )}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.apiReducer.data.results,
  names: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  planetas: PropTypes.instanceOf(Array).isRequired,
  names: PropTypes.string.isRequired,
};
