import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {add,min} from 'Component/tool/action';

class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1
    }
  }

  render() {
    console.log(this.props);
    return(
    	 <div>
    	     
					<Link to='/index'>登录界面</Link>
            <button onClick={()=>{
              
              this.props.add(1)
            }}>+</button>
              {this.props.reducer}
            <button onClick={()=>{
              
              this.props.min(1)
            }}>-</button>
            
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
//console.log(111);
const mapStateToProps = (state) =>({reducer: state.reducer.reducer, counter: state.counter})

const mapDispatchToProps = (dispatch) =>{
  return{
    add:payload=>{dispatch(add(payload))},
    min:payload=>{dispatch(min(payload))}
  }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
