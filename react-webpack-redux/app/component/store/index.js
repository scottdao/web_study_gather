import reducerManagementRoot from './reducer'
import { createStore,applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();
const configureStore = (preloadedState) => {
	if(process.env.NODE_ENV == 'development'){
	    return createStore(
		   	reducerManagementRoot,
		    preloadedState,
		    applyMiddleware(
		      thunkMiddleware,
		      loggerMiddleware
		    )
		)
	}else{
		 return createStore(
		   	reducerManagementRoot,
		    preloadedState,
		    applyMiddleware(
		      thunkMiddleware
		    )
		)
	}
 
}

export default configureStore();
