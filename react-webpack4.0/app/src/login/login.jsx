import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {add,min} from 'Component/tool/actions';
import { Menu, ActivityIndicator, NavBar, Button,List, InputItem, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { createForm } from 'rc-form';
class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1,
       hasError: false,
       value: '',
    }
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  render() {
    console.log(this.props);
    console.log(_);
    var array = [1];
    var other = _.concat(array, 2, [3], [[4]]);
     console.log(other);
     const { form:{getFieldProps} } = this.props;
     console.log(VERSION);
    // console.log(TWO);
    return(
    	 <div>
    	     
					<Link to='/index'>登录界面</Link>
            <Button  type="primary" size="small" inline onClick={() => {
               
              this.props.add(1)
            }}>+</Button>
              {this.props.reducer}
            <Button  type="primary" size="small" inline onClick={() => {
              
              this.props.min(1)
            }}>-</Button>
            <InputItem
            {...getFieldProps('autofocus')}
                  clear
                  placeholder="auto focus"
                  ref={el => this.autoFocusInst = el}
            >标题</InputItem>
              <InputItem
                  type="phone"
                  placeholder="input your phone"
                  error={this.state.hasError}
                  onErrorClick={this.onErrorClick}
                  onChange={this.onChange}
                  value={this.state.value}
                >手机号码</InputItem>
    	 </div>
    )
  }
}
Login.contextTypes = {
  store: PropTypes.object
}
const mapStateToProps = (state) =>({reducer: state.reducer.reducer, counter: state.counter})
const mapDispatchToProps = (dispatch) =>{
  return{
    add:payload=>{dispatch(add(payload))},
    min:payload=>{dispatch(min(payload))}
  }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Login));
