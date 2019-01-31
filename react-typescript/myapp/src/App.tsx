import * as React from "react";
import { Provider} from 'mobx-react'
import Router from './router';
import {
  HashRouter,
} from 'react-router-dom'
import store from './component/store/store'

class App extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
  public render(){
	
	return(
	 <Provider store={store}>
		<HashRouter>
			<Router />
		</HashRouter>
	</Provider>
	 )
 }
}

export default App;
  
