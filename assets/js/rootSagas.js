import { fork, all } from 'redux-saga/effects';
import users from './modules/users';
import reviews from './modules/reviews';

const sagas = [
    users.sagas,
    reviews.sagas,
];

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
