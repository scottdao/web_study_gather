import {
    handleActions
} from 'redux-actions';
import {
    REQUSET_MAIN_LIST_START,
    REQUSET_MAIN_LIST_SUCCESS,
    REQUSET_MAIN_LIST_FAILED
} from 'Component/store/type/main-management/main-list.js';
const defaultState = {}

const mainListReducer = handleActions({
    [REQUSET_MAIN_LIST_START]: (state, action) => {
        return ({
            ...state,
            mainList: action.payload.payload
        })
    },
    [REQUSET_MAIN_LIST_SUCCESS]: (state, action) => {
        return ({
            ...state,
            mainList: action.payload.payload
        })
    },
    [REQUSET_MAIN_LIST_FAILED]: (state, action) => ({
        ...state,
        mainList: action.payload.payload
    })
}, defaultState);

export default mainListReducer;