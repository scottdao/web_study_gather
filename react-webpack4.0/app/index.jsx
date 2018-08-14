import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'Style/reset.scss'
import RouterIndex from 'Router/router'
import {Provider,connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import store from 'Component/tool/store'
import http from 'Component/http'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1}
   
  }
 componentDidMount(){
			http.post('/V2/Share',{},(res)=>{
  			console.log(res)
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
  	  const history = createHistory()
      return(<Provider store={store}>
              <Router  history={history}>
                  <RouterIndex />
              </Router>
            </Provider>)
    //return(<React.Fragment><RouterIndex /></React.Fragment>)
  }
}

ReactDOM.render(<Index />,document.getElementById('root'));
