import { REQUEST_API, RECEIVE_API } from '../actions';

const INITIALSTATE = {
  data: [],
  isLoading: false,
};

/* CONSULTEI REPO DO COLEGA DE TURMA - FELIPE VIEIRA PARA TENTAR ENXERGAR 
MELHOR LÓGICA DESSE REDUCER */

// tenho ainda que implementar o isLoading

// tenho que importar dados da API para receber "results"

export const reduceApi = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_API:
      return {
        ...state,
        data: action.payload.results,
        isLoading: false,
      };
    default:
      return state;
  }
};
