import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'Style/reset.scss'
import RouterIndex from 'Router/router'
import {Provider} from 'react-redux';
import store from 'Component/tool/store'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1}
  }
 componentDidMount(){
 				http.default.post('/V2/Share',{},(res)=>{
      		console.log(res)
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return(<Provider store={store}><RouterIndex /></Provider>)
  }
}
ReactDOM.render(<Index />,document.getElementById('root'));
