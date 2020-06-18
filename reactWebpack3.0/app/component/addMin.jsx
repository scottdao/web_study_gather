import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AddMin extends Component{
    constructor(props,context){
        super(props,context)
    }
    componentDidMount(){
     
    }
    render(){
    	const add = this.props.add;
        const min = this.props.min;
        const children = this.props.children;
        return(
            <div>
            	<button onClick = {
            	()=>{
                     add()
            			
            		}
            	}>+</button>
            	 {
            	 	children
            	 }	
            	<button 
            	onClick={()=>{
            		min()
            	}}
            	>-</button>
            </div>
        )
    }
}
AddMin.contextTypes = {
	store:PropTypes.object
}
export default AddMin;
