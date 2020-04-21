import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'Style/reset.scss';
import RouterIndex from 'Router/router';
import { Provider, connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import store from 'Component/store';
import { Switch, Redirect } from 'react-router';
import 'antd/dist/antd.css';
import {
  Router,
  HashRouter,
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import http from 'Component/http';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  componentDidMount() {
    // http.post('/V2/Share',{},(res) =>{
    // 		console.log(res)
    // })
    this.setState({
      count: 2,
    });
  }
  Name = () => {
    console.log(111);
  };
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const history = createHistory();
    // console.log(React, 'react');
    const ConfigRouter = () => {
      return (
        <BrowserRouter>
          <RouterIndex />
        </BrowserRouter>
      );
    };
    // const ConfigRouter = () => {
    //   return process.env.NODE_ENV === 'development' ? (
    // <BrowserRouter>
    //   <RouterIndex />
    // </BrowserRouter>
    //   ) : (
    //     <HashRouter>
    //       <RouterIndex />
    //     </HashRouter>
    //   );
    // };
    return (
      <Provider store={store}>
        <ConfigRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
