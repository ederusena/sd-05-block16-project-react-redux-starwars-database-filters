import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPIStarWarsPlanets from '../actions/action';
import Headers from './HeaderTabela';
import FiltrosDaPagina from './HeaderPagina';

class Table extends React.Component {
  componentDidMount() {
    const { StarWarsPlanetsAPI } = this.props;
    console.log('api', StarWarsPlanetsAPI);
    StarWarsPlanetsAPI();
    /*
    componentDidMount,quando montado, toda vez que o
    componente é renderizado é feita umaChamada na API.
    */
  }

  renderTable() {
    const { data } = this.props;
    return data.map((planet) => (
      <tr>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ))
  }

  render() {
    const { fazendoRequisicao } = this.props;
    console.log('table', this.props);
    return (
      <div>
        <div>
          <FiltrosDaPagina />
        </div>
        <table>
          <Headers />
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
        {fazendoRequisicao && 'Loading...'}
      </div>
    );
  }
}

/*
  {fazendoRequisicao && 'Loading...'} enquanto fazendoRequisicao
  for true, o texto loading vai aparecer na tela.
*/

/*
  mapStateToProps faz o papel do subscribe no redux
  e no react faz papel no render
*/

/* os states que vou usar mapStateToProps vem do reducer initial_state*/
/*
  O valor do state do verificandoRequisicaoAPI
  vai ser três infos(o state, o reducer que
  contêm a action e a action que quero)
*/

const filtraPlanetas = (planetas, filtroDeTexto) => {
  console.log('planetas', planetas)
  let planetasExibidos = planetas;
  if (filtroDeTexto !== '') {
    planetasExibidos = planetasExibidos.filter((planet) => planet.name
    .toLowerCase().includes(filtroDeTexto.toLowerCase()));
  }

  return planetasExibidos;
};

const mapStateToProps = (state) => ({
  fazendoRequisicao: state.planetsReducer.fazendoRequisicao,
  data: filtraPlanetas(state.planetsReducer.data, state.reducerFilter.filterByName.name),
});

const mapDispatchToProps = (dispatch) => ({
  StarWarsPlanetsAPI: () => dispatch(fetchAPIStarWarsPlanets()),
});

Table.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  StarWarsPlanetsAPI: PropTypes.func.isRequired,
  fazendoRequisicao: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */
