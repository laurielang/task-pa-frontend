import React, { Component } from "react";

class TaskPriority extends Component {
  render() {
    return (
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
    );
  }
}

export default TaskPriority;