import { createActions } from 'redux-actions';
import {REQUSET_SHARE_START,REQUSET_SHARE_SUCCESS,REQUEST_SHARE_FAILED} from 'Component/store/type/login-management/login-share.js';
const {requsetShareStart,requsetShareSuccess,requestShareFiled} = createActions({
	[REQUSET_SHARE_START]:payload => ({payload}),
	[REQUSET_SHARE_SUCCESS]:payload => {return ({payload})},
	[REQUEST_SHARE_FAILED]:payload => ({payload})

});
export {requsetShareStart,requsetShareSuccess,requestShareFiled};