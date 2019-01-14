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
    let loginQX = 0;//strict
    return(
			    	<Switch >
					    <Route exact path="/" component={() => loginQX==1?<Redirect to='/index' />:<Login />}/>
              <Route  path="/index"  component={props => <Index {...props} />}/>
              <Route  path='/detail' component={Detail} />
              <Route       component={() => <div>404</div>} />
						</Switch>
            
					)
  }
}
RouterIndex.contextTypes = {
  store: PropTypes.object
}
export default RouterIndex;