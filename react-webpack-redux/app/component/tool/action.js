
import { createAction } from 'redux-actions';

const {add,min} = createAction({
	'ADD':payload=>({payload}),
	'MIN':payload=>({payload})
})

// function add(payload) {
//   return { type: 'ADD', payload }
// }
// //const bindAdd = payload => dispatch(add(payload));
// function min(payload){
// 	return{ type:'min',payload}
// }
export {add,min}
