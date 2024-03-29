import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  process.env.NODE_ENV !== 'production' ? composeEnhancers(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)
);