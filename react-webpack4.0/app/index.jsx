import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'Style/reset.scss'
import RouterIndex from 'Router/router'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
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
			const defaultState = 0;
			const reducer = (state = defaultState, action) => {
			  switch (action.type) {
			    case 'ADD':
			      return state + action.payload;
			    default: 
			      return state;
			  }
			};
			
			const state = reducer(1, {
			  type: 'ADD',
			  payload: 2
			});
			console.log(state)
			const store = createStore(reducer)
			console.log(store)
    return(<Provider store={store}><RouterIndex /></Provider>)
  }
}
ReactDOM.render(<Index />,document.getElementById('root'));
