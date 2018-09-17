import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AddMin extends Component{
    constructor(props,context){
        super(props,context)
      //console.log(this.props);
      this.state = {
      	val:props.children
      }
    }
   
    componentDidMount(){
     
    }
    render(){
    	let store = this.context.store;
    	//console.log(store);
    		
        return(
            <div>
            	<button onClick = {
            	()=>{

            			store.dispatch({type:'adde',num:1,max:20})
            			var s = store.getState();
            			let $this = this
        				$this.setState({
        					val:s.adder
        				})
            		}
            	}>+</button>
            	 {
            	 	this.state.val
            	 }	
            	<button 
            	onClick={()=>{
            		store.dispatch({type:'min',num:1,min:0})
            		var s = store.getState();
            		this.setState({
            			val:s.adder
            		})
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
