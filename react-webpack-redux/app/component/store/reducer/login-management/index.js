import { combineReducers } from 'redux'

import countReducer from './count.js';
import loginShareReducer from './login-share.js';
export default combineReducers({
  countReducer,
  loginShareReducer
})
