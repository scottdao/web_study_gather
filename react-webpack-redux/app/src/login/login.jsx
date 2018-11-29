import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addCount,minCount} from 'Component/store/action/login-management/count-action';

class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1
    }
  }

  render() {
    //console.log(this.props);
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
  reducer: state.loginManagementReducer.countReducer.reducer
 });
const mapDispatchToProps = {
  addCount,
  minCount
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
