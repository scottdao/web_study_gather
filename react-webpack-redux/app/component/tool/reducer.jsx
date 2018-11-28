/*import { createStore } from 'redux'*/
import { combineReducers } from 'redux'
import { createAction } from 'redux-actions';

const defaultState = {
  reducer:0
}
const reducer = handleAction({
  'ADD':(state,action)=>({reducer:state.reducer+action.payload}),
  'MIN':(state,action)=>({reducer:})
});
// const defaultState = 0;
// const reducer = (state = 0, action) => {
//   //console.log(action);
//   switch (action.type) {
//     case 'ADD':
//       //return state.concat([action.text]);
//       return state+action.payload; 
//     case 'MIN':
//       return  state-action.payload;
//     default: 
//       return state;
//   }
// };
// const counter=(state =0, action) =>{
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
export default combineReducers({
  //reducer:combineReducers({reducer}),
  reducer:combineReducers({reducer}),
	counter
})