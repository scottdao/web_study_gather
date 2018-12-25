import {
    createActions
} from 'redux-actions';
import {
    REQUSET_MAIN_LIST_START,
    REQUSET_MAIN_LIST_SUCCESS,
    REQUSET_MAIN_LIST_FAILED
} from 'Component/store/type/main-management/main-list.js';
const {
    requsetMainListStart,
    requsetMainListSuccess,
    requsetMainListFailed
} = createActions({
    [REQUSET_MAIN_LIST_START]: payload => ({
        payload
    }),
    [REQUSET_MAIN_LIST_SUCCESS]: payload => ({
        payload
    }),
    [REQUSET_MAIN_LIST_FAILED]: payload => ({
        payload
    })

});
export {
    requsetMainListStart,
    requsetMainListSuccess,
    requsetMainListFailed
};