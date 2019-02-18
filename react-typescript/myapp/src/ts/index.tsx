import * as React from "react";
import {
  Route,
  NavLink 
} from 'react-router-dom';
import {Switch, Redirect} from 'react-router';
import Main from'./index/main';
import Mine from './index/mine';
interface IProps {
 match?:any,
 location?:object,
 history?:any
}
class Index extends React.Component<IProps, {}> {
    
  public state = {
		count:1
	};
  public render(){
	 const {match, location} = this.props;
	 return(
		<div>
		首页
		<NavLink  to={`${match.url}/main`}>资产</NavLink >
		<NavLink  to={`${match.url}/mine`}>我的</NavLink >
		<Switch location={location}>
			 <Route       path={`${match.url}/mine`} component={Mine} />
			 <Route       path={`${match.url}/main`}  component={Main} />
			 <Route render={() => <Redirect to={`${match.url}/main`} />} />
		</Switch>
		</div>
	 )
 }
}

export default Index;