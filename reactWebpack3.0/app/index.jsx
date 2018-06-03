import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'Css/first.scss';
import RouterIndex from 'Router/router';
class Index extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
    	//console.log(111);
    	//console.log(root)
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
