import { takeEvery, call, put, select } from 'redux-saga/effects';
import api from './api';
import * as t from './actionTypes';
import {
  fetchSuccess,
  fetchFailure,
  fetchListSuccess,
  fetchListFailure,
  updateSuccess,
  updateFailure,
} from './actions';

export function* getAllUsers(action) {
  try {
    const result = yield call(api.getAll, action);
    yield put(fetchListSuccess(result));
  } catch (error) {
    yield put(fetchListFailure(error));
  }
}

export function* getUser(action) {
  try {
    const result = yield call(api.get, action);
    yield put(fetchSuccess(result));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export function* updateUser(action) {
  try {
    const result = yield call(api.update, action);
    yield put(updateSuccess(result));
  } catch (error) {
    yield put(updateFailure(error));
  }
}

export function* watchLoginFlow() {
  yield takeEvery(t.FETCH_LIST_REQUEST, getAllUsers);
  yield takeEvery(t.FETCH_REQUEST, getUser);
  yield takeEvery(t.UPDATE_REQUEST, updateUser);
}

export default watchLoginFlow;
