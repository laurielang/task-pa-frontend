import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ExtendedNavBar from './Components/ExtendedNavBar';
import TaskTitle from './Components/AddItem/TaskTitle';
import AddPeople from './Components/AddItem/AddPeople';
import TaskDate from './Components/AddItem/TaskDate';
import RepeatTask from './Components/AddItem/RepeatTask';
import TaskCategory from './Components/AddItem/TaskCategory';
import TaskPriority from './Components/AddItem/TaskPriority';
import TaskReminder from './Components/AddItem/TaskReminder';
import TaskDetails from './Components/AddItem/TaskDetails';
import CreateTaskButton from './Components/AddItem/CreateTaskButton';




class App extends Component {
  render() {
    return (

<div className="App">
            
      <Header/>

      <div className="pos-f-t">        
        <ExtendedNavBar/>              
      </div>

<div className="container">

    <div className="row-100%">     
        <h2>Add Task</h2>       
    </div>
    
    <div className="row-100%">
      <TaskTitle/>
      <AddPeople/>      
      <TaskDate/>    
    </div>

<div className="row 100%">

  <div className="col-6">   
    <RepeatTask/>
    <TaskCategory/>
    <TaskPriority/>
    <TaskReminder/>
  </div>

<div className="col-6">          
  <TaskDetails/>
</div>

</div>

<div className="row-100%">
      <div className="col-12">
      <CreateTaskButton/>
      </div>
</div>


      
      </div>
        
     
    </div> 

  
    );
  }
}



export default App;
