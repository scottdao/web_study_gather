import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1
    }
  }

  render() {
    console.log(this.props.history);
    return(
    	 <div>
    	     
					<Link to='/index'>登录界面</Link>
            <button onClick={()=>{
              
              this.props.dispatch({
                type: 'ADD',
                text:1
              })
            }}>+</button>
              {this.props.reducer}
            <button onClick={()=>{
              
              this.props.dispatch({
                type: 'min',
                text:1
              })
            }}>-</button>
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
//console.log(111);
const mapStateToProps = (state) =>({reducer: state.reducer, counter: state.counter})

export default connect(mapStateToProps)(Login);