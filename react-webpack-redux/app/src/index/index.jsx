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
    let {match, extra, location} = this.props;
    return(<div>
        			<NavLink  to={`${match.url}/main`}>资产</NavLink >
    		    	<NavLink  to={`${match.url}/mine`}>我的</NavLink >
              <Switch location={location}>
                 <Route       path={`${match.url}/mine`} component={Mine} />
                 <Route       path={`${match.url}/main`}  component={Main} />
                 <Route       component={() => <Redirect to={`${match.url}/main`} />} />
              </Switch>
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