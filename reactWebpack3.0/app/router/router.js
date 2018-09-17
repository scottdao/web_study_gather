import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRedirect,hashHistory} from 'react-router';
import Login from 'JS/login';
import Index from 'JS/index';
import {Provider,connect} from 'react-redux';
import store from 'Component/redux/store';
import PropTypes from 'prop-types';
class routerIndex extends Component{
    constructor(props,context){
        super(props,context)
    }
    componentDidMount(){
     
    }
    render(){
        return(
               <Provider store={store}>
                	<Router history={hashHistory} store={store}>
                               <Route path='/' component={Login} ></Route> 
                               <Route path='/index' component={Index}></Route>
                           </Router>
                </Provider >
            )
        }
    }

routerIndex.contextTypes = {
    store:PropTypes.object
}                     
export default routerIndex;