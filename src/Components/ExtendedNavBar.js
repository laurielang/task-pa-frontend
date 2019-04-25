import React, { Component } from "react";


class ExtendedNavBar extends Component {
  render() {
    return (
    
        <div className="bg-light p-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">DASHBOARD</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="todaysTasks.html">Todays Tasks <span class="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="allTasks.html">All Tasks</a>
                    <a className="nav-item nav-link" href="completedTasks.html">Compeleted Tasks</a>
                    <a className="nav-item nav-link" href="addTask.html">Add Task</a>
                </div>
                    
        
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
          
        </div>
    );
  }
}

export default ExtendedNavBar;