import Detail from '@/ts/detail';
import Login from '@/ts/login';
import * as React from "react";
import { Route } from 'react-router-dom';
import {Switch} from 'react-router';
import Index from '@/ts';
class RouterIndex extends React.Component<{}, {}> {
  public render(){
	 return(
			<Switch >
							<Route  exact={true} path="/" component={Login}/>
              <Route  path="/index"  component={props=> <Index {...props} />}/>
              <Route  path='/detail' component={Detail} />
              <Route       component={() => <div>404</div>} />
			</Switch>
	 )
 }
}

export default RouterIndex;