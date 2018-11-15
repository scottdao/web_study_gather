import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.js';
import {withTracker} from 'meteor/react-meteor-data'; 
import { Tasks } from '../api/task.js';
//console.log(Tasks);
import AccountsUIWrapper from './accountswrapper.js';


import {Meteor} from 'meteor/meteor';
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    //console.log(text);
    if(text){
      /*// console.log(text)
      Tasks.insert({//数据插入；
        text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username,  // username of logged in user
      });*/
      Meteor.call('tasks.insert', text);
      // Clear form
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }else{
      alert('不可为空！')
    }
   
  }
  renderTasks() {
   // console.log(this.props);
   let filteredTasks = this.props.tasks;
   if (this.state.hideCompleted) {
     filteredTasks = filteredTasks.filter(task => !task.checked);
   }
    return this.props.tasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
      return(
        <Task key={task._id} task={task}  showPrivateButton={showPrivateButton}/>
      )
    });
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
  render() {
    //console.log(this.props);
    return (
      <div className="container">
        <header>
          <h1>Todo List({this.props.incompleteCount})</h1>
        </header>
        <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>
          <AccountsUIWrapper ></AccountsUIWrapper>
          { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
            <input type='submit' value='提交'/> 
        </form>: ''
          }
       
         <span>{this.renderTasks()}</span>
      </div>
    );
  }
}
export default  withTracker(()=>{
  Meteor.subscribe('tasks');
  return{
  tasks:Tasks.find({},{sort:{createdAt:-1}}).fetch(),
  incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  currentUser: Meteor.user()
}})(App)