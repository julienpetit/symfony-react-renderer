import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import users from './modules/users';
import reviews from './modules/reviews';

export default combineReducers({
  [users.constants.NAME]: users.reducer,
  [reviews.constants.NAME]: reviews.reducer,
  form: formReducer,
  router: routerReducer,
});
