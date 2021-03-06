import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware(rootSaga);
export const history = createHistory();

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(logger),
  ),
);

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}
