
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions';
const defaultState = {
  reducer:0
}
const reducerAction = handleActions({
  'ADD':(state,action) =>{console.log(action);return({
  	...state,
  	reducer:state.reducer+action.payload.payload
  })},
  'MIN':(state,action) => ({
  	...state,
  	reducer:state.reducer-action.payload.payload
  })
},defaultState);

export default combineReducers({
  reducer:combineReducers({reducerAction})
})