import React, { Component } from "react";

class TaskTitle extends Component {
  render() {
    return (
    <div className="form-group">        
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Task Title"/>        
    </div>
    );
  }
}

export default TaskTitle;