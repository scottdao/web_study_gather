/*import { createStore } from 'redux'*/
import {combineReducers } from 'redux';

const defaultState = 0;
const reducer = (state=0, action) => {

  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const  counter= (state=0,action)=>{
    switch (action.tx) {
    case 'ADDTo':
      return state + action.tx;
    default: 
      return state;
  }
};

const adder= (state=1,action)=>{
  //console.log(action);
  switch (action.type) {
    case 'adde':
      let st =  state + action.num;
      
      return st<=action.max?st : action.max;
    case 'min':
      let mn = state - action.num;
      return mn>=action.min?mn : action.min;
    default: 
      return state;
  }
};

const todos=(state = [], action)=> {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}
export default combineReducers({
 
  reducer,
  counter,
  todos,
  adder,
})