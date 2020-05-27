import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import vehicles from './vehicles/reducer';

export default combineReducers({
  auth,
  user,
  vehicles,
});
