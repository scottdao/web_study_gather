
import { createActions } from 'redux-actions';
const {add,min} = createActions({
	'ADD':payload => ({payload}),
	'MIN':payload => ({payload})
});
export {add,min}
