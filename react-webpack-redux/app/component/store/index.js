import reducerManagementRoot from './reducer'
import { createStore,applyMiddleware  } from 'redux';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

//引入saga;
import createSagaMiddleware from 'redux-saga';

import sagaManagementRoot from './saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => {
	if(ENV == 'dev'){
	    return createStore(
		   	reducerManagementRoot,
		   	preloadedState,
		    applyMiddleware(loggerMiddleware,sagaMiddleware)
		)
	}else{
		return createStore(
		   	reducerManagementRoot,
		    preloadedState,
		    applyMiddleware(sagaMiddleware)
		)
	}
 	sagaMiddleware.run(sagaManagementRoot);
}



export default configureStore();
