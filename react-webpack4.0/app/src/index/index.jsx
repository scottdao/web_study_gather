import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link,
  NavLink 
} from 'react-router-dom'
import PropTypes from 'prop-types'
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
export default Index;