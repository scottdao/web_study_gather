import React,{Component} from 'react';
import {
  BrowserRouter  as Router,
  HashRouter,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import {Switch,Redirect} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Index from 'Src/index/index'
import Login from 'Src/login/login'
import Mine from 'Src/index/mine'
import Main from 'Src/index/main'
import Detail from 'Src/index/detail'
//console.log(Login);
class RouterIndex extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
   }
 
  render() {
    return(<HashRouter >
			    	<React.Fragment>
					    <Route exact path="/" component={Login}/>
						  <Route strict path="/index"  component={Index}/>
							<Route  path='/index/mine' component={Mine} />
							<Route  path='/index/main' component={Main} />
							<Route  path='/detail' component={Detail} />
						</React.Fragment>
					</HashRouter >)
  }
}
export default RouterIndex;