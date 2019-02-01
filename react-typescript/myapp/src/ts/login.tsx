import * as React from "react";
import {Link } from 'react-router-dom';
// import {Button} from 'antd-mobile';

class Login extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
  public componentDidMount(){
   }
  
  public render(){
	 return(
		<div>
		登录
		<Link to='./index'>进入首页</Link>
	{//	<Button>点击进入</Button>\
	}
		</div>
	 )
 }
}

export default Login;