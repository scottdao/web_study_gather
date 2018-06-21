import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
class Main extends Component {
  constructor(props,context) {
    super(props,context);
  }
 componentDidMount(){
 			
   }
  render() {
    return(<div>
    			资产
    			<Link to='/detail'>进入详情</Link>
		    </div>)
  }
}
Main.contextTypes = {
  store: PropTypes.object
}
export default Main;