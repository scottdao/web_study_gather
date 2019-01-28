import * as React from "react";
import { Provider } from 'mobx-react'
import Router from './router';
import {
  HashRouter,
} from 'react-router-dom'
import CreateStore from './component/store/store'
// console.log(CreateStore);
class App extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
  public render(){
		
	 return(
	 <Provider CreateStore={CreateStore}>
		<HashRouter>
			<Router />
		</HashRouter>
	</Provider>
	 )
 }
}

export default App;
  
