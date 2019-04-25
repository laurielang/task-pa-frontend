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

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button">Priority</button>
      </div>
      <select className="custom-select" id="inputGroupSelect03">
        <option selected>Set Priority...</option>
        <option value="1">Critical</option>
        <option value="2">Important</option>
        <option value="3">Normal</option>
        <option value="4">Low</option>
      </select>
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button">Reminder</button>
      </div>
      <select className="custom-select" id="inputGroupSelect03">
        <option selected>Set Reminder...</option>
        <option value="1">1 hr before deadline</option>
        <option value="2">1 day before deadline</option>
        <option value="3">1 week before deadline</option>
      </select>
    </div>

  </div>

<div className="col-6">          
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Task Details"></textarea>
</div>
</div>


<button type="submit" class="btn btn-primary btn-small">Create Task</button>

      
      </div>
        
     
    </div> 

  
    );
  }
}

export default App;
