import React, { Component } from "react";
import UUID from 'uuid/v4'

class AddTask extends Component {
 
  state = {
    TaskTitle: '',
    Date: '',
    Priority: 'Set Priority...',
    Category: 'Choose Category...',
    TaskDetails:'',

  }

  handleTaskTitleChange = (event) => {
    this.setState({
      TaskTitle: event.target.value

    })
  }

  handleDateChange = (event) => {
    this.setState({
      Date: event.target.value

    })
  }

  handlePriorityChange = (event) => { console.log(event)
    this.setState({
      Priority: event.target.value

    })
  }

  handleCategoryChange = (event) => { console.log(event)
    this.setState({
      Category: event.target.value

    })
  }

  handleTaskDetailsChange = (event) => {
    this.setState({
      TaskDetails: event.target.value

    })
  }

  handleClick = () => {

    const newTask = {
      TaskTitle: this.state.TaskTitle,
      TaskDetails: this.state.TaskDetails,
      Date: this.state.Date,
      Category: this.state.Category,
      Priority: this.state.Priority,
      taskId: UUID()

    };
    
      this.props.addTask(newTask);
      this.setState({
        text: ''
      });
    
  }

 
  render() {

    const catergoryOptions = ["Choose Category...", "Personal", "Work", "Family", "Business"]
    const priorityOptions = ["Set Priority...", "Critical", "Important", "Normal", "Low"]

    return (
        
<div className="container">

<div className="row-100">
 
        <div className="form-group">          
          <input type="text" className="form-control" id="TaskTitle" aria-describedby="emailHelp" placeholder="Task Title" onChange={this.handleTaskTitleChange} />          
        </div>

        <div className="form-group">          
          <input type="date" className="form-control" id="Date" aria-describedby="emailHelp" onChange={this.handleDateChange} />          
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" >Category</button>
            </div>
            <select className="custom-select" id="Category" onChange={this.handleCategoryChange} value={this.state.Category}>
            {catergoryOptions.map((categoryOption, i) => {
              return <option value={categoryOption} key={i} >{categoryOption}</option>
            } )}                          
            </select>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button">Priority</button>
            </div>
            <select className="custom-select" id="Priority" onChange={this.handlePriorityChange} value={this.state.Priority}>      
            {priorityOptions.map((priorityOption, i) => {
              return <option value={priorityOption} key={i}>{priorityOption}</option>
            })}
            </select>
        </div>

        <div>          
            <textarea className="form-control" id="TaskDetails" rows="6" placeholder="Task Details"onChange={this.handleTaskDetailsChange}></textarea>
        </div>  

        <div className="text-right">
            <button type="submit" className="mt-3 btn btn-primary" onClick={this.handleClick}>Create Task</button>
        </div>
        
</div>
</div>

    );
  }
}

export default AddTask;