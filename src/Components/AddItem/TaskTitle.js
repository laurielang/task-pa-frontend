import React, { Component } from "react";

class TaskTitle extends Component {
 
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
    <div className="form-group">        
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Task Title" value={this.state.text} onChange={this.handleChange}/>        
    </div>
    );
  }
}

export default TaskTitle;