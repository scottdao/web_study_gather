import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addCount,minCount} from 'Component/store/action/login-management/count-action';
import LoginSharePost from 'Component/store/http/login-management/login-share';
class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1
    }
  }
  componentDidMount(){
   LoginSharePost()
  }
  render() {
    //console.log(this.props.loginShare);
    //LoginSharePost();
    let loginShare = this.props.loginShare || {};
    //console.log(loginShare);
    return(
    	 <div>
    	    <Link to={`/index/1`}>登录界面</Link>
            <button onClick={() => {
               this.props.addCount(1);
             
            }}>+</button>
              {this.props.reducer}
            <button onClick={() => {
              this.props.minCount(1);
            
            }}>-</button>
             
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
//console.log(111);
const mapStateToProps = (state) =>({
  reducer: state.loginManagementReducer.countReducer.reducer,
  loginShare:state.loginManagementReducer.loginShareReducer.loginShare
 });
const mapDispatchToProps = {
  addCount,
  minCount
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
