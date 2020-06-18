import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
class Detail extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
 			
  }
  render() {
    //console.log(this.props);
    return(<div>
    			详情页面
		    </div>)
  }
}
Detail.contextTypes = {
  store: PropTypes.object
}
export default Detail;