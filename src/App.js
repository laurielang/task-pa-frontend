import React, { Component } from 'react';
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

    <div className="row">     
        <h2 className="mt-2 ml-3">Add Task</h2>       
    </div>
    
    <div className="row-100%">
      <TaskTitle/>  
      <AddPeople/>        
      <TaskDate/>    
    </div>

<div className="row w-100%">

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

<div className="row w-100">
  <CreateTaskButton/>    
</div>


      
</div>

<div className="container mb-4">

<div className="row w-100">
<h2 className="mt-2 ml-3">All Tasks</h2>
</div>

<div className="row w-100">
<div class="col-4">


         
<div className="card text-center" styles="width: 18rem;">

    <div className="card-body">
      <h5 className="card-title">Task title</h5>
      <h6 className="card-subtitle mb-1 text-muted">Key Info</h6>                             
    </div>


    <div className="card-footer" styles="width:18rem"> 
                  
    
      <div className="card card-body">
        All Task details listed
        -people responsible
        -deadline
        -priority
        -task details
      </div>
      <div className="row">
      <div className="col-6">
      <a href="#" className="btn btn-primary btn-sm btn-block mt-2">Check</a>
      </div>
      <div className="col-6">
    <a href="#" className="btn btn-primary btn-sm btn-block mt-2">Remove</a>
    </div>
    </div>
    
    </div>
  </div>


</div>
</div>     

</div>
        
     
</div> 

  
    );
  }
}



export default App;
