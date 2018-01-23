import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import users from './modules/users';

export default combineReducers({
    [users.constants.NAME]: users.reducer,
    form: formReducer,
    router: routerReducer,
});
