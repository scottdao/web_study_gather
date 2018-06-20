import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Main extends Component {
  constructor(props) {
    super(props);
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
export default Main;