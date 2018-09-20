import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Tab extends Component{
    constructor(props,context){
        super(props,context)
      //console.log(this.props);
     
    }
   
    componentDidMount(){
      
    }
    render(){
    	const children = this.props.children;
        return(
            <div>
            	我是tab组件
            	{children}
            </div>
        )
    }
}
Tab.contextTypes = {
	store:PropTypes.object
}
export default Tab;

