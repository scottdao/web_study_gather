import * as React from "react";
import Router from './router';
import {
  HashRouter,
} from 'react-router-dom'
import {actions, store} from './component/store/store';

import { Provider } from 'mobx-react';

interface IProps {
 match?:any,
 location?:object,
 history?:any,
 store?:any,
 actions?:any
}
class App extends React.Component<IProps, {}> {
    
  public state = {
		count:1
	};
  public render(){
	return(
	 <Provider store={store} actions={actions}>
		<HashRouter>
			<Router />
		</HashRouter>
	</Provider>
	 )
 }
}

export default App;
  
