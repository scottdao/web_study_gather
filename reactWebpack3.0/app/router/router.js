import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class routerIndex extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
      	console.log($$);
      	console.log(Gobal)
    }
    render(){
        return(
             <div>
                	我是路由
              </div>
        )
    }
}
export default routerIndex;