import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './first.scss';
import RouterIndex from './router/router';
class Index extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
    	//console.log(111);
    }
    render(){
        return(
             <React.Fragment>
                <RouterIndex/>
             </React.Fragment>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));
