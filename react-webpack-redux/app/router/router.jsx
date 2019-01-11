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
    let loginQX = 1;//strict
    return(
      
			    	<Switch>
					   <Route exact path="/" component={Login}/>
             <Route       path='/detail' component={Detail} />

              <BrowserRouter basename='/index'>
                   <Route    path="/"  render={props => <Index {...props} />}/>
               </BrowserRouter>
                <Route  component={render =><div>走丢啦！</div>} />
						</Switch>
            
					)
  }
}
RouterIndex.contextTypes = {
  store: PropTypes.object
}
export default RouterIndex;