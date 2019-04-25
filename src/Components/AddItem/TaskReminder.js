import React, { Component } from "react";

class TaskReminder extends Component {
  render() {
    return (
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
  
    );
  }
}

export default TaskReminder;