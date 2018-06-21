import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
class Login extends Component {
  constructor(props,context) {
    super(props,context);
  }
  componentDidMount(){
		var store  = this.context.store;
		console.log(store)
		store.subscribe(function(){
			console.log(store.getState())
		})
		store.dispatch({ type: 'ADD',payload:20 })
		console.log(store.getState())
   }
  
  render() {
    return(
    	 <div>
					<Link to='/index'>登录界面</Link>
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
export default Login;