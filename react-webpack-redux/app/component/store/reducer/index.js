
import { combineReducers } from 'redux'

import loginManagementReducer from './login-management';
import mainMangementReducer from './main-management'
export default combineReducers({
  loginManagementReducer,
  mainMangementReducer
})