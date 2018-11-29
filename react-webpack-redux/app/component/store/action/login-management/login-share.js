import { createActions } from 'redux-actions';
import {ADD_COUNT,MIN_COUNT} from 'Component/store/type/login-management/login-share.js';
const {addCount,minCount} = createActions({
	[ADD_COUNT]:payload => ({payload}),
	[MIN_COUNT]:payload => ({payload})
});
export {addCount,minCount};