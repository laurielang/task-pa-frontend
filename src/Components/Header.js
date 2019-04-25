import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
    <nav className="navbar navbar-dark bg-dark ">                    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">      
            <span className="navbar-toggler-icon"></span> TASK-PA
        </button>
    </nav>
    );
  }
}

export default Header;