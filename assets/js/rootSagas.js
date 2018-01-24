import { fork, all } from 'redux-saga/effects';
import reviews from './modules/reviews';

const sagas = [
  reviews.sagas,
];

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
