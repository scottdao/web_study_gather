import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AddMin from 'Component/addMin'
import Tab from 'Component/tab';
import {hashHistory,Link} from 'react-router';
import tool from 'Component/tool'
//let POST = tool.http.post;
//tool.http.post()
class Login extends Component{
    constructor(props,context){
        super(props,context)
        this.state={

        	index:0

        }
      
    }

    componentDidMount(){
       // POST()
    }
    render(){
        const store = this.context.store;
        let $this = this;
        let index = this.state.index 
        store.subscribe(()=>{
            let s = store.getState();
           $this.setState({
                index:s.adder
            })
        })
        
        return(
            <div>
            		我是登录页
            		<AddMin add={()=>{
                        store.dispatch({type:'adde',max:20})
                    }} 
                    min = {()=>{
                        store.dispatch({type:'min',min:0})
                    }}
                    >
            		  {
            		  	index
            		  }
            		</AddMin>
                    <Tab>
                        {index}
                    </Tab>

                    <div onClick = {()=>{
                        hashHistory.push('/index');
                    }}>登录</div>
            </div>
        )
    }
}
Login.contextTypes = {
	store:PropTypes.object
}
export default Login;
