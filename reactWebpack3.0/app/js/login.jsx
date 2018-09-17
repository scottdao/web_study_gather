import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AddMin from 'Component/AddMin'

class Login extends Component{
    constructor(props,context){
        super(props,context)
        this.state={

        	index:1

        }
      
    }

    componentDidMount(){
     var store = this.context.store;
    	var s = store.getState();
    	//console.log(s.adder);
    	store.subscribe(()=>{
    		console.log(s.adder);
    	})
    }
    render(){
    	
        return(
            <div>
            		我是登录页
            		<AddMin> 
            		  {
            		  	this.state.index
            		  }
            		</AddMin>
            </div>
        )
    }
}
Login.contextTypes = {
	store:PropTypes.object
}

export default Login;
