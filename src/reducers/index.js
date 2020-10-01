import { combineReducers } from 'redux';
import { AQUISICAO, CERTO, TEXTO, NUMERO } from '../actions/index';

const initialState = {
  isLoading: false,
  planets: [],
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case AQUISICAO:
      return {
        ...state,
        isLoading: true,
      };
    case CERTO:
      return {
        ...state,
        isLoading: false,
        planets: action.planets,
      };
    default:
      return state;
  }
};

const filtro = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filters(state = filtro, action) {
  switch (action.type) {
    case TEXTO:
      return {
        ...state,
        filterByName: { name: action.texto },
      };
    case NUMERO:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    default:
      return state;
  }
}

const emptyReducer = combineReducers({
  planReducer,
  filters,
});

export default emptyReducer;
