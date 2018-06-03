import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'Style/reset.scss'
//console.log(ReactDOM);
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1}
  }
 componentDidMount(){
    	//console.log($$)
    }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return(<React.Fragment>我是六四 </React.Fragment>)
  }
}
ReactDOM.render(<Index />,document.getElementById('root'));
