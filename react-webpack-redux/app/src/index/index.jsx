import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link,
  NavLink 
} from 'react-router-dom'
import {Switch,Redirect} from 'react-router'
import PropTypes from 'prop-types'
import {addCount,minCount} from 'Component/store/action/login-management/count-action';
import {connect} from 'react-redux';

import Mine from 'Src/index/mine'
import Main from 'Src/index/main'
class Index extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount(){
 			
   }
  render() {
    //console.log(this.props);/V2/GoodTerm
    console.log(this.props);
    let {match, extra} = this.props;
    return(<div>
        			<NavLink  to={`${match.path}/main`}>资产</NavLink >
    		    	<NavLink  to={`${match.path}/mine`}>我的</NavLink >

              <Route       path={`${match.path}/mine`} component={Mine} />
              <Route        path={`${match.path}/main`}  component={Main} />
		    </div>)
  }
}
Index.contextTypes = {
  store: PropTypes.object
}
const mapStateToProps = (state) =>({
  reducer: state.reducerManagementRoot
});

const mapDispatchToProps = {
  addCount,
  minCount
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);