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
    this.state={
    	first:0
    }
  }
  componentDidMount(){
		var store  = this.context.store;
		console.log(store)
		var $this = this;
		store.subscribe(function(){
			console.log(store.getState())
			$this.setState({
				first:store.getState()
			})
		})
		/*store.replaceReducer(function(){
			return 5
		})*/
		store.dispatch({ type: 'ADD',payload:20 })
		//console.log(store.getState())
   }
  
  render() {
    return(
    	 <div>
    	 {this.state.first}
					<Link to='/index'>登录界面</Link>
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
export default Login;