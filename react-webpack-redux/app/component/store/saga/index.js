import {
    call,
    put,
    takeEvery,
    takeLatest,
    all,
    fork
} from 'redux-saga/effects';
import Api from 'Component/api/api';
import {
    REQUSET_MAIN_LIST_START
} from 'Component/store/type/main-management/main-list';


// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
import {
    requsetMainListFailed,
    requsetMainListSuccess
} from 'Component/store/action/main-management/main-list';

function* fetchMain(action) {
	console.log(action);
    try {
        const data = yield call(Api.fetchUser);
        yield put(requsetMainListSuccess(data));
    } catch (e) {
        yield put(requsetMainListFailed(data));
    }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mainSaga() {
    yield takeEvery(REQUSET_MAIN_LIST_START, fetchMain);
}
//console.log(mainSaga);
function* rootSaga() {
  yield all([
    fork(mainSaga)
  ]);
} 
export default  rootSaga
//export default mainSaga;