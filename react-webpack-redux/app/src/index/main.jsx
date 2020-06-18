import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requsetMainListStart} from 'Component/store/action/main-management/main-list'
class Main extends Component {
  constructor(props,context) {
    super(props,context);
  }
 componentDidMount(){
 			this.props.requsetMainListStart();
   }
  render() {
    console.log(this.props);
    return(<div style={{color:'red',height:'100px',width:'100px',backgroundColor:'blue'}}>
    			资产
    			<Link to='/detail'>进入详情</Link>
		    </div>)
  }
}
Main.contextTypes = {
  store: PropTypes.object
}
//console.log(111);
const mapStateToProps = (state) =>({
  mainList:state.mainMangementReducer.mainListReducer
 });
const mapDispatchToProps = {
  requsetMainListStart
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);