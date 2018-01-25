import { takeEvery, call, put } from 'redux-saga/effects';
import api from './api';
import * as t from './actionTypes';
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;
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
    yield put(notifSend({
        message: Translator.trans('review.list.fetch.error'),
        kind: 'danger',
        dismissAfter: 2000,
    }));
  }
}

export function* createReview(action) {
  try {
    const result = yield call(api.create, action);
    yield put(createSuccess(result));
    yield put(notifSend({
        message: Translator.trans('review.form.create.success'),
        kind: 'success',
        dismissAfter: 2000,
    }));
  } catch (error) {
    yield put(createFailure(error));
    yield put(notifSend({
        message: Translator.trans('review.form.create.error'),
        kind: 'danger',
        dismissAfter: 2000,
    }));
  }
}

export function* watchLoginFlow() {
  yield takeEvery(t.FETCH_LIST_REQUEST, getAllReviews);
  yield takeEvery(t.CREATE_REQUEST, createReview);
}

export default watchLoginFlow;
