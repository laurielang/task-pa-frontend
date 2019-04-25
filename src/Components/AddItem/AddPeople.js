import React, { Component } from "react";

class AddPeople extends Component {
  render() {
    return (
    <div className="form-group">        
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Invitees"/>        
    </div>
    );
  } 
}

export default AddPeople;