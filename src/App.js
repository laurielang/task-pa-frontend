import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ExtendedNavBar from './Components/ExtendedNavBar';
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

  <div class="col-4">
         
  <div className="card text-left" styles="width: 18rem;">
    <div className="card-body w-100">
      <div className="row">
        <div className="col-6">
          <h7 className="card-title text">Task title</h7>
        </div>
        <div className="col-6 text-right"> 
          <h7 className="card-title text-right">Date</h7> 
        </div>
       </div> 

       <div className="row">
        <div className="col-6">
          <h7 className="card-subtitle mb-1 text-muted">Priority</h7>
        </div>
        <div className="col-6 text-right"> 
          <h7 className="card-subtitle mb-1 text-muted">Category</h7> 
        </div>
       </div>  
       </div>                                
    


    <div className="card-footer" styles="width:18rem">    
      <div className=" text-center card-body">
        Task Details
      </div>
      <div className="row">
        <div className="col-6">
          <a href="#" className="btn btn-outline-success btn-sm btn-block mt-2">Check</a>
        </div>
        <div className="col-6">
          <a href="#" className="btn btn-outline-danger btn-sm btn-block mt-2">Remove</a>
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
