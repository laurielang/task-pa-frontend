import React, { Component } from "react";
// import task from './Components/Task';



class Task extends Component {
  render() {
    return (
      <div class="col-4">
         
      <div className="card text-left mt-3" styles="width: 18rem;">
        <div className="card-body w-100">
          <div className="row">
            <div className="col-6">
              <h7 className="card-title text">{this.props.task.TaskTitle}</h7>
            </div>
            <div className="col-6 text-right"> 
              <h7 className="card-title text-right">{this.props.task.Date}</h7> 
            </div>
           </div> 
    
           <div className="row">
            <div className="col-6">
              <h7 className="card-subtitle mb-1 text-muted">{this.props.task.Priority}</h7>
            </div>
            <div className="col-6 text-right"> 
              <h7 className="card-subtitle mb-1 text-muted">{this.props.task.Category}</h7> 
            </div>
           </div>  
           </div>                                
        
    
    
        <div className="card-footer" styles="width:18rem">    
          <div className=" text-center card-body">
            {this.props.task.TaskDetails}
          </div>
          <div className="row">
            <div className="col-6">
              <a href="#" className="btn btn-success btn-sm btn-block mt-2">Check</a>
            </div>
            <div className="col-6">
              <a href="#" className="btn btn-danger btn-sm btn-block mt-2">Remove</a>
            </div>
          </div>    
        </div>
    </div>  
    
    </div>
    );
  }
}

export default Task;