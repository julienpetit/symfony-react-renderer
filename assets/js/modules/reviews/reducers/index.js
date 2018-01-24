import { combineReducers } from 'redux';
import list from './ListReducer';
import add from './AddReducer';

export default combineReducers({
  list,
  add,
});
