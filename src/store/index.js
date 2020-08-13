import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import planetReducer from '../reducers';
// test do projeto quer que seja importado desde 'src/reducers/index.js', deve ser correto assim

const rootReducer = combineReducers({planetReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
