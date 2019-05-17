import React, { Component } from "react";
// import task from './Components/Task';



class Task extends Component {
  render() {
    return (
      <div className="col-4">
         
      <div className="card text-left mt-3" styles="width: 18rem;">
        <div className="card-body w-100">
          <div className="row">
            <div className="col-6">
              <h6 className="card-title text">{this.props.task.TaskTitle}</h6>
            </div>
            <div className="col-6 text-right"> 
              <h6 className="card-title text-right">{this.props.task.Date}</h6> 
            </div>
           </div> 
    
           <div className="row">
            <div className="col-6">
              <h6 className="card-subtitle mb-1 text-muted">{this.props.task.Priority}</h6>
            </div>
            <div className="col-6 text-right"> 
              <h6 className="card-subtitle mb-1 text-muted">{this.props.task.Category}</h6> 
            </div>
           </div>  
           </div>                                
        
    
    
        <div className="card-footer" styles="width:18rem">    
          <div className=" text-center card-body">
            {this.props.task.TaskDetails}
          </div>
          <div className="row">
            <div className="col-6">
            {this.props.task.completed ? <button className="btn btn-primary btn-sm btn-block"> <span className="oi" data-glyph="check"></span>Check Off</button> : <button type="button" className="btn btn-success btn-sm btn-block mt-2">Complete</button>}
            </div>
            <div className="col-6">
              {this.props.task.completed ? null : <button type="button" className="btn btn-danger btn-sm btn-block mt-2">Remove</button>}
            </div>
          </div>    
        </div>
    </div>  
    
    </div>
    );
  }
}

export default Task;