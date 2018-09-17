import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Index extends Component{
    constructor(props,context){
        super(props,context)
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>我是首页</div>
        )
    }
}
Index.contextTypes = {
  store:PropTypes.object
}
export default Index;
