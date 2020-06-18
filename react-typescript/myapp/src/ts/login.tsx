import * as React from "react";
import {Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react'

interface IProps {
 match?:any,
 location?:object,
 history?:any,
 store?:any,
 actions?:any
}
@inject('store', 'actions')
@observer
class Login extends React.Component<IProps,{}> {
    
  public state = {
		count:1
	};
  public componentDidMount(){
   }
  
  public render(){
	  const { store, actions } = this.props;
	  console.log(this.props);
	 return(
		<div>
		登录
		<Link to='./index'>进入首页</Link>
		 <p>{store.a}</p>
        <p>
          <button className="ui-btn" onClick={actions.incA}>增加 a</button>
          <button className="ui-btn" onClick={actions.decA}>减少 a</button>
        </p>
		</div>
	 )
 }
}

export default Login;