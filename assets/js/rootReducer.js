import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import reviews from './modules/reviews';

export default combineReducers({
  [reviews.constants.NAME]: reviews.reducer,
  form: formReducer,
  router: routerReducer,
});
