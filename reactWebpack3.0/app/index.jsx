import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './first.scss'
class Index extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
    	//console.log(111);
    }
    render(){
        return(
             <div>
                我是react3.0
              </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));
