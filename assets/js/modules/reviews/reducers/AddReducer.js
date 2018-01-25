import * as t from '../actionTypes';

const INITIAL_STATE = {
  review: null,
  isLoading: false,
  created: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.FETCH_REQUEST:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };

    case t.FETCH_SUCCESS:
      return {
        ...INITIAL_STATE,
        review: action.payload,
      };

    case t.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case t.CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case t.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        created: true,
        review: action.payload,
      };

    case t.CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
