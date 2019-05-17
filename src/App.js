import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
// import TaskTitle from './Components/AddItem/TaskTitle';
// import AddPeople from './Components/AddItem/AddPeople';
// import TaskDate from './Components/AddItem/TaskDate';
// import RepeatTask from './Components/AddItem/RepeatTask';
// import TaskCategory from './Components/AddItem/TaskCategory';
// import TaskPriority from './Components/AddItem/TaskPriority';
// import TaskReminder from './Components/AddItem/TaskReminder';
// import TaskDetails from './Components/AddItem/TaskDetails';
// import CreateTaskButton from './Components/AddItem/CreateTaskButton';
import AddTask from './Components/AddTask';
import Task from './Components/Task';
import UUID from 'uuid/v4'


class App extends Component {

  state = {
    tasks: [
      { TaskTitle: "Feed the dog", Date: "2019-05-25", Category: "", Priority: "", TaskDetails: "", completed: true, taskId: UUID()  },

      { TaskTitle: "Tidy", Date: "2019-05-17", Category: "", Priority: "", TaskDetails: "", completed: false, taskId: UUID() },

      { TaskTitle: "Wash up", Date: "2019-05-07", Category: "", Priority: "", TaskDetails: "", completed: false, taskId: UUID() },

      { TaskTitle: "Practice JS", Date: "2019-05-01", Category: "", Priority: "", TaskDetails: "", completed: false, taskId: UUID() },
    ],
    todaysTaskCount: 0
  }

  componentDidMount() {
    this.todaysTasksCounter();
  }


  todaysTasksCounter = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const todaysDate = date + "-" + month + "-" + year;

    let todaysTask = 0

    this.state.tasks.forEach((item) => {
      if (item.Date === todaysDate) { todaysTask += 1 }
    });

    this.setState({
      todaysTaskCount: todaysTask
    });

  }

  addTask = (newTask) => {

    alert(JSON.stringify(newTask));
   
    const newTasks = this.state.tasks.slice();
    newTasks.push(newTask);

      this.setState({
      tasks: newTasks
    });
  }

  deleteTask = taskId => {
  const filteredTasks = this.state.tasks.filter(item => {
    if (item.taskId === taskId){
      return false;
    } else{
      return true;
    }
  })
  this.setState({
    tasks: filteredTasks
  })
 
  }

  checkOffTask = taskId => {
    const filteredTasks = this.state.tasks.filter(item => {
      if (item.taskId === taskId){
        return false;
      } else{
        return true;
      }
    })
    this.setState({
      tasks: filteredTasks
    })
    
  }

  completeTask = taskId => {
    const updatedTasks = this.state.tasks.map(item => {
      if (item.taskId === taskId) {
        item.completed = true;
      }
     return item;
    });
    this.setState({
      tasks: updatedTasks
    });
  }

   

  render() {
    return (

      <div className="App">

        <Header />

        <div className="pos-f-t">
          <Dashboard totalCount={this.state.tasks.length} tasksToday={this.state.todaysTaskCount} />
        </div>

        <div className="container">

          <div className="row">
            <h3 className="mt-2 ml-3">Add Task</h3>
          </div>
          <div className="row w-100">
            <AddTask addTask={this.addTask}  />
          </div>
        </div>

        <div className="container mb-4">

          <div className="row w-100">
            <h3 className="mt-2 ml-3">All Tasks</h3>
          </div>

          <div className="row w-100">

            {this.state.tasks.map((item, index) => {
                return <Task task={item} key={index} taskId={item.taskId} deleteTask={this.deleteTask} completeTask={this.completeTask} checkOffTask={this.checkOffTask}/>
            })}

           
          </div>

        </div>


      </div>


    );
  }
}



export default App;
