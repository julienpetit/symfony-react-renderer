import * as t from './actionTypes';

export const createRequest = (payload) => ({
    type: t.CREATE_REQUEST,
    payload,
});

export const createSuccess = (payload) => ({
    type: t.CREATE_SUCCESS,
    payload,
});

export const createFailure = (payload) => ({
    type: t.CREATE_FAILURE,
    payload,
});

export const fetchListRequest = (payload) => ({
    type: t.FETCH_LIST_REQUEST,
    payload,
});

export const fetchListSuccess = (payload) => ({
    type: t.FETCH_LIST_SUCCESS,
    payload,
});

export const fetchListFailure = (payload) => ({
    type: t.FETCH_LIST_FAILURE,
    payload,
});
