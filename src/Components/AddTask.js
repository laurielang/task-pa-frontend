import React, { Component } from "react";

class AddTask extends Component {
 
  state = {
    text: ''
  }

  handleChange = (event) => {
      this.setState({
        text: event.target.value
    })
  }
 
  render() {
    return (
        
<div className="container">

<div className="row-100">
 
        <div className="form-group">          
          <input type="text" className="form-control" id="TaskTitle" aria-describedby="emailHelp" placeholder="Task Title"/>          
        </div>

        <div className="form-group">          
          <input type="date" className="form-control" id="Date" aria-describedby="emailHelp" />          
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button">Category</button>
            </div>
            <select className="custom-select" id="Category">
                <option selected>Choose Category...</option>
                <option value="1">Personal</option>
                <option value="2">Work</option>
                <option value="3">Family</option> 
                <option value="3">Bills</option>                
            </select>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button">Priority</button>
            </div>
            <select className="custom-select" id="Priority">
                <option select>Set Priority...</option>
                <option value="1">Critical</option>
                <option value="2">Important</option>
                <option value="3">Normal</option>
                <option value="4">Low</option>
            </select>
        </div>

        <div>          
            <textarea className="form-control" id="TaskDetails" rows="6" placeholder="Task Details"></textarea>
        </div>  

        <div className="text-right">
            <button type="submit" className="mt-3 btn btn-primary">Create Task</button>
        </div>
        
</div>
</div>

    );
  }
}

export default AddTask;