// The module index is responsible for maintaining its public API.
// This is the exposed surface where modules can interface with each other.
import * as actions from './actions';
import constants from './constants';
import reducer from './reducers';
import sagas from './sagas';

export default {
  actions, constants, reducer, sagas,
};
