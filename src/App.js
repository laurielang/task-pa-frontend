import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
// import TaskTitle from './Components/AddItem/TaskTitle';
// import AddPeople from './Components/AddItem/AddPeople';
// import TaskDate from './Components/AddItem/TaskDate';
// import RepeatTask from './Components/AddItem/RepeatTask';
// import TaskCategory from './Components/AddItem/TaskCategory';
// import TaskPriority from './Components/AddItem/TaskPriority';
// import TaskReminder from './Components/AddItem/TaskReminder';
// import TaskDetails from './Components/AddItem/TaskDetails';
// import CreateTaskButton from './Components/AddItem/CreateTaskButton';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';


class App extends Component {

  state = {
    tasks: [
      {TaskTitle: "Feed the dog", Date: "21-05-19",Category:"", Priority:"", TaskDetails:"", completed: true},

      {TaskTitle: "Tidy", Date: "21-05-19", Category:"", Priority:"", TaskDetails:"", completed: false},

      {TaskTitle: "Wash up", Date: "21-05-19", Category:"", Priority:"", TaskDetails:"", completed: true},

      {TaskTitle: "Practice JS", Date: "21-05-19", Category:"", Priority:"", TaskDetails:"", completed: true},
    ],
  }

  render() {
    return (

<div className="App">
            
      <Header/>

      <div className="pos-f-t">        
        <Dashboard totalCount={this.state.tasks.length} />              
      </div>

<div className="container">

    <div className="row">     
        <h3 className="mt-2 ml-3">Add Task</h3>       
    </div>
    <div className="row w-100">    
      <AddTask/>
    </div>
</div>

<div className="container mb-4">

<div className="row w-100">
  <h3 className="mt-2 ml-3">All Tasks</h3>
</div>

<div className="row w-100">
    <Tasks/>
    <Tasks/>
    <Tasks/>
    <Tasks/>
</div>     

</div>
        
     
</div> 

  
    );
  }
}



export default App;
