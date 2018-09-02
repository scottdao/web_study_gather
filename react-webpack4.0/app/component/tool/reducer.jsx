/*import { createStore } from 'redux'*/
import { combineReducers } from 'redux'

const defaultState = 0;
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      //return state.concat([action.text]);
      return state+action.text 
    default: 
      return state;
  }
};
const counter=(state =0, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
export default combineReducers({
	reducer,
	counter
})