import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'Css/first.scss';
import RouterIndex from 'Router/router';
import {Provider,connect} from 'react-redux';
import store from 'Component/redux/store';
import PropTypes from 'prop-types';
class Index extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
    	
    }
    render(){
        return(
             <React.Fragment>
                <RouterIndex  />
            </React.Fragment >
        )
    }
}
Index.contextTypes = {
    store:PropTypes.object
}
ReactDOM.render(<Index/>,document.getElementById('root'));
