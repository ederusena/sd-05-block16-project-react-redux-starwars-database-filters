import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import selectTitle from '../actions/selectTitle';

// const titutosCabecalho = ['population', 'orbital_period',
// 'diameter', 'rotation_period', 'surface_water'];

class Seletores extends React.Component {
  /* componentDidMount() {
    this.props.buscaCabecalho(this.props.cabecalho);
  } */

  render() {
    /* console.log(this.props) */
    return (
      <div>
        <select
          data-testid="column-filter" onChange={(e) => this.props.valorFiltro(e.target.value)}
        >
          <option value="" defaultValue>Coluna</option>
          { this.props.cabecalho.map((titulo) => <option value={titulo}>{titulo}</option>) }
          {/*  { this.props.cabecalho.map(titulo => <option>{titulo}</option>) } */}
        </select>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cabecalho: state.reducerBasico.cabecalho
    .filter((titulo) => (titulo === 'population' ||
    titulo === 'orbital_period' || titulo === 'diameter'
    || titulo === 'rotation_period' || titulo === 'surface_water')),
});

/* const mapDispatchToProps = (dispatch) => ({
  buscaCabecalho(titulo) {
    dispatch(selectTitle(titulo));
  },
}); */

const mapDispatchToProps = (dispatch) => ({
  valorFiltro: (valorSelecionado) => dispatch(selectTitle(valorSelecionado)),
});

Seletores.propTypes = {
  cabecalho: Proptypes.arrayOf(Proptypes.object).isRequired,
  valorFiltro: Proptypes.func.isRequired,
  /* buscaCabecalho: Proptypes.func.isRequired, */
};

export default connect(mapStateToProps, mapDispatchToProps)(Seletores);
