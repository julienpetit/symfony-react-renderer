import { takeEvery, call, put } from 'redux-saga/effects';
import api from './api';
import * as t from './actionTypes';
import {
  fetchListSuccess,
  fetchListFailure,
  createSuccess,
  createFailure,
} from './actions';

export function* getAllReviews(action) {
  try {
    const result = yield call(api.getAll, action);
    yield put(fetchListSuccess(result));
  } catch (error) {
    yield put(fetchListFailure(error));
  }
}

export function* createReview(action) {
  try {
    const result = yield call(api.create, action);
    yield put(createSuccess(result));
  } catch (error) {
    yield put(createFailure(error));
  }
}

export function* watchLoginFlow() {
  yield takeEvery(t.FETCH_LIST_REQUEST, getAllReviews);
  yield takeEvery(t.CREATE_REQUEST, createReview);
}

export default watchLoginFlow;
