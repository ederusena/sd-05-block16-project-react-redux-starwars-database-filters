import React from 'react';
import { connect } from 'react-redux';
import tableHead from './TableHead';
import { thunkPlanet } from '../actions/index';

class Table extends React.Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  // referencia de tabelas em html5 https://flatschart.com/html5/tabelas.html

  tableData() {
    const { planetData } = this.props;
    return planetData.map((data) => (
      <tr key={data.name}>
        <td>{data.rotation_period}</td>
        <td>{data.orbital_period}</td>
        <td>{data.diameter}</td>
        <td>{data.climate}</td>
        <td>{data.gravity}</td>
        <td>{data.terrain}</td>
        <td>{data.surface_water}</td>
        <td>{data.population}</td>
        <td>{data.residents}</td>
        <td>{data.films}</td>
        <td>{data.created}</td>
        <td>{data.edited}</td>
        <td>{data.url}</td>
      </tr>
    ));
  }

  render() {
    const { planetData, isFetching } = this.props;
    console.log(planetData);
    if (!isFetching && planetData.length > 0) {
    return(
        <table>
            <tableHead />
          <tbody>{this.planetData()}</tbody>
        </table>
        );
    }
    return <div>Searching...</div>;
  }
}

const mapStateToProps = (state) => ({
  planetData: state.data,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({ fetchPlanets: () => dispatch(thunkPlanet()) });

export default connect(mapStateToProps, mapDispatchToProps)(Table);
