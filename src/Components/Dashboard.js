import React, { Component } from "react";


class Dashboard extends Component {
  render() {
    return (
    
        <div className="bg-light p-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="row w-100">

            <div className="col-3">
                <div class="card text-center ">
                    <div class="card-header bg-primary text-white" styles="font-size: 0.75rem">Tasks Remaining</div>
                    <div class="card-body">                                    
                        <h5 class="card-title" styles="font-size: 1.7rem;">{this.props.totalCount}</h5>                                                                         
                    </div>
                </div> 
            </div>

            <div className="col-3">
                <div class="card text-center ">
                    <div class="card-header bg-success text-white" styles="font-size: 0.75rem">Todays Tasks</div>
                    <div class="card-body">                                    
                        <h5 class="card-title" styles="font-size: 1.7rem;">{this.props.todaysTaskCounter}</h5>                                                                         
                    </div>
                </div> 
            </div>

            <div className="col-3">
                 <div class="card text-center ">
                    <div class="card-header bg-warning text-white" styles="font-size: 0.75rem">High Priority</div>
                    <div class="card-body">                                    
                        <h5 class="card-title" styles="font-size: 1.7rem;">7</h5>                                                                         
                    </div>
                </div>  
            </div>  

            <div className="col-3">
                 <div class="card text-center ">
                    <div class="card-header bg-danger text-white" styles="font-size: 0.75rem">Deadlines Missed</div>
                    <div class="card-body">                                    
                        <h5 class="card-title" styles="font-size: 1.7rem;">7</h5>                                                                         
                    </div>
                </div>  
            </div> 

                   
            </div>    
            </nav>
          
        </div>
        
    );
  }
}

export default Dashboard;