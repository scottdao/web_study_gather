import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link,
  NavLink 
} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {add,min} from 'Component/tool/actions';
class Index extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
   }
  render() {
    return(<div>
    			<NavLink  to='/index/main'>资产</NavLink >
		    	<NavLink  to='/index/mine'>我的</NavLink >
		    </div>)
  }
}
Index.contextTypes = {
  store: PropTypes.object
}
const mapStateToProps = (state) =>({reducer: state.reducer.reducer, counter: state.counter})

const mapDispatchToProps = (dispatch) =>{
  return{
    add:payload=>{dispatch(add(payload))},
    min:payload=>{dispatch(min(payload))}
  }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);
