import { handleActions } from 'redux-actions';
import {ADD_COUNT,MIN_COUNT} from 'Component/store/type/login-management/count-type.js';
const defaultState = {
  reducer:0
}
const countReducer = handleActions({
  [ADD_COUNT]:(state,action) =>{return({
  	...state,
  	reducer:state.reducer+action.payload.payload
  })},
  [MIN_COUNT]:(state,action) => ({
  	...state,
  	reducer:state.reducer-action.payload.payload
  })
},defaultState);


export default countReducer;
