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
    	first:1
    }
  }
  componentDidMount(){
		var store  = this.context.store;
		//console.log(store)
		var $this = this;
		store.subscribe(function(){
			console.log(store.getState())
			$this.setState({
        first:store.getState().reducer
      })
		})
		/*store.replaceReducer(function(){
			return 5
		})*/
		// store.dispatch({
  //     type: 'ADD',
  //     text:$this.state.first
  //   })
		//console.log(store.getState())
   }
  
  render() {
    var store  = this.context.store;
    return(
    	 <div>
    	     
					<Link to='/index'>登录界面</Link>
            <button onClick={()=>{
              this.state.first+1;
              store.dispatch({
                type: 'ADD',
                text:this.state.first
              })
            }}>+</button>
              {this.state.first}
            <button>-</button>
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
export default Login;