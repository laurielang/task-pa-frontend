import React, { Component } from "react";


class CreateTaskButton extends Component {
  render() {
    return (
      
        <button type="submit" className="btn btn-primary mt-2 ml-3" onClick={this.HandleClick}>Create Task</button>
        
    );
  }
}

export default CreateTaskButton;