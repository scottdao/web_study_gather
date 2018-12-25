import { handleActions } from 'redux-actions';
import {REQUSET_SHARE_START,REQUSET_SHARE_SUCCESS,REQUEST_SHARE_FAILED} from 'Component/store/type/login-management/login-share.js';
const defaultState = {
  loginShare:'',
}

const loginShareReducer = handleActions({
  [REQUSET_SHARE_START]:(state,action) =>{return({
  	...state,
  	loginShare:action.payload.payload
  })},
  [REQUSET_SHARE_SUCCESS]:(state,action) =>{return({
  	...state,
  	loginShare:action.payload.payload
  })},
  [REQUEST_SHARE_FAILED]:(state,action) => ({
  	...state,
  	loginShare:action.payload.payload
  })
},defaultState);

export default loginShareReducer;