import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'Style/reset.scss'
import RouterIndex from 'Router/router'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1}
  }
 componentDidMount(){
<<<<<<< HEAD
 				http.default.post('/V2/Share',{},(res)=>{
      		console.log(res)
      	})
 				
   }
=======
      	console.log($$)
    }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
>>>>>>> 096338846e3463c3be8aed1ecc4704ec5337382b
  render() {
    return(<React.Fragment><RouterIndex /></React.Fragment>)
  }
}
ReactDOM.render(<Index />,document.getElementById('root'));
