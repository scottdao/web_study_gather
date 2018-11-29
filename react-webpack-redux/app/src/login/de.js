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
  componentWillMount(){
  	console.info(new Date()+':',1)
  }
 componentDidMount(){
 		console.info(new Date()+':',2)	
 			
  }
  componentWillUnMount(){
  	console.info(new Date()+':',4)
  }
  
  render() {
  	console.info(new Date()+':',3);	
    //console.log(this.props);
    return (
        <div>
    			组件
		    </div>
        )
  }
}
Detail.contextTypes = {
  store: PropTypes.object
}
export default Detail;