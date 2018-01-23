import { fork, all } from 'redux-saga/effects';
import users from './modules/users';

const sagas = [
    users.sagas,
];

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
