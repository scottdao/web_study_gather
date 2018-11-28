import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link,
  NavLink 
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {add,min} from 'Component/tool/action';
import {connect} from 'react-redux';
class Index extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
   }
  render() {
    console.log(this.props);
    return(<div>
    			<NavLink  to='/index/main'>资产</NavLink >
		    	<NavLink  to='/index/mine'>我的</NavLink >
          {this.props.reducer}
		    </div>)
  }
}
Index.contextTypes = {
  store: PropTypes.object
}
const mapStateToProps = (state) =>({reducer: state.reducer.reducer, counter: state.counter});

const mapDispatchToProps = (dispatch) =>{
  return{
    add:payload=>{dispatch(add(payload))},
    min:payload=>{dispatch(min(payload))}
  }
   
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);