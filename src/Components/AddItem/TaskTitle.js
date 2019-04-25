import React, { Component } from "react";

class TaskTitle extends Component {
  render() {
    return (
    <div class="form-group">        
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Task Title"/>        
    </div>
    );
  }
}

export default TaskTitle;