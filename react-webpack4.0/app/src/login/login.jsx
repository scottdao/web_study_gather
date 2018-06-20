import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
   }
  render() {
  	
    return(
    	 <div>
			<Link to='/index/main'>登录界面</Link>
    	 </div>
    )
  }
}
export default Login;