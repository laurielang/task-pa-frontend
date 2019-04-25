import React, { Component } from "react";

class RepeatTask extends Component {
  render() {
    return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">Repeat</button>
        </div>
        <select className="custom-select" id="inputGroupSelect03">
          <option selected>Repeat...</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
          <option value="3">Annually</option>                
        </select>
    </div>
    );
  }
}

export default RepeatTask;