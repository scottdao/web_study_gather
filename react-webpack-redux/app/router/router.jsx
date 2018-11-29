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
import PropTypes from 'prop-types'
//console.log(connect)
class RouterIndex extends Component {
  constructor(props,context) {
    super(props,context);
  	//console.log(context)
  }
 	componentDidMount(){

  }
  render() {
    return(<HashRouter >
			    	<React.Fragment>
					    <Route exact path="/" component={Login}/>
						  <Route strict path="/index/:id"  component={Index}/>
							<Route  path='/index/mine' component={Mine} />
							<Route  path='/index/main' component={Main} />
							<Route  path='/detail' component={Detail} />
						</React.Fragment>
					</HashRouter >)
  }
}
RouterIndex.contextTypes = {
  store: PropTypes.object
}
export default RouterIndex;
