import * as t from '../actionTypes';

const INITIAL_STATE = {
    reviews: [],
    isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.FETCH_LIST_REQUEST:
            return {
                ...INITIAL_STATE,
                isLoading: true,
            };

        case t.FETCH_LIST_SUCCESS:
            return {
                ...INITIAL_STATE,
                reviews: action.payload,
            };

        case t.FETCH_LIST_FAILURE:
            return {
                ...INITIAL_STATE,
                hasErrors: true,
            };

        case t.CREATE_REQUEST:
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    action.payload,
                ],
            };

        default:
            return state;
    }
}
