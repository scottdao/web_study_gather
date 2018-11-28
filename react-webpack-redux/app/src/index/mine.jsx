import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
class Mine extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			//console.log(this.context)
 }
  render() {
    return(<div>
		    	我的的界面
		    </div>)
  }
}
Mine.contextTypes = {
  store: PropTypes.object
}
export default Mine;