import React, { Component } from "react";

class TaskCategory extends Component {
  render() {
    return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">Category</button>
        </div>
        <select className="custom-select" id="inputGroupSelect03">
          <option selected>Choose Category...</option>
          <option value="1">Personal</option>
          <option value="2">Work</option>
          <option value="3">Family</option> 
          <option value="3">Bills</option>                
        </select>
    </div>
    );
  }
}

export default TaskCategory;