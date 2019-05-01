import React, { Component } from "react";

class Tasks extends Component {
  render() {
    return (
      <div class="col-4">
         
      <div className="card text-left mt-3" styles="width: 18rem;">
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
    );
  }
}

export default Tasks;