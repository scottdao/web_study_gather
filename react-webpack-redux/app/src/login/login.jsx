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
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Switch, Slider
} from 'antd';
import 'antd/dist/antd.css';
import MyInput from './myInput'
import {AudioPlayer} from 'Src/components'; 

const { Option } = Select;

class PriceInput extends React.Component {
  // static getDerivedStateFromProps(nextProps) {
  //   // Should be a controlled component.
  //   if ('value' in nextProps) {
  //     //console.log(nextProps)
  //     return {
  //       ...(nextProps.value || {}),
  //     };
  //   }
  //   return null;
  // }

  constructor(props) {
    super(props);
    //console.log(props);
    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
         defaultValue={'RMB'}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}


class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
    	first:1,
      flag:false,
      dataSource:[]
    }
  }
  componentDidMount(){
   LoginSharePost()

  }
   handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  }
 handleSearch = (value) =>{
    this.setState({
        dataSource:!value?[]:[value,value+value,value+value+value]
    })
 }
  render() {
    let loginShare = this.props.loginShare || {};
    //console.log(this.props);
    let {form:{getFieldDecorator:getFieldDecorator}} = this.props;
    let {flag, dataSource} = this.state;
   
    return(
    	 <Form layout="inline" onSubmit={this.handleSubmit}>
    	    <Link to={`/index`}>登录界面</Link>
            <button onClick={() => {
               this.props.addCount(1);
            }}>+</button>
              {this.props.reducer}
            <button onClick={() => {
              this.props.minCount(1);
            }}>-</button>

              <Form.Item label="Price">
                {getFieldDecorator('price', {
                  initialValue: { number: 0, currency: 'rmb' },

                  rules: [{ validator: this.checkPrice, required:true }],
                })(<PriceInput />)}
              </Form.Item>
               <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            
             <Switch checked={flag} onChange={() => {
              this.setState(({flag}) => {
                console.log(flag)
                return{ flag:!flag }
              })
             }}/>
             <Switch checked={flag} />

            
             <Form.Item label="学生">
               {getFieldDecorator('student', {
                  
                  rules: [{ validator: (rule, value, callback) => {
                    callback('学生不能为空')
                  },required:true }],
                })(<MyInput />)}
             </Form.Item>
               <AudioPlayer />
               <Slider />
               <AutoComplete
                  dataSource={dataSource}
                  style={{ width: 200 }}
                  onSelect={(value) => {
                    console.log(value);
                  }}
                  onSearch={this.handleSearch}
                  placeholder="input here"
                />
      	 </Form>
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
export default connect(mapStateToProps,mapDispatchToProps)(Form.create({name: 'customized_form_controls' })(Login));
