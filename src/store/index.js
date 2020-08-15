import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

// [Honestidade acadêmica]
// Código para integrar o Redux Devtools
// achado pronto no repositório oficial da extension:
// https://github.com/zalmoxisus/redux-devtools-extension
