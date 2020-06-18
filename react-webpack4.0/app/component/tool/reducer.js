/*import { createStore } from 'redux'*/
import { combineReducers } from 'redux'

const defaultState = 0;
const reducer = (state = 0, action) => {
  //console.log(action);
  switch (action.type) {
    case 'ADD':
      //return state.concat([action.text]);
      return state+action.payload; 
    case 'min':
      return  state-action.payload;
    default: 
      return state;
  }
};

export default combineReducers({
  //reducer:combineReducers({reducer}),
  reducer:combineReducers({reducer})
})