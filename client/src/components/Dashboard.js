import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="container row center-align">
        <div>Dashboard</div>
        <div class="fixed-action-btn">
          <Link to="/surveys/new" class="btn-floating btn-large red">
            <i class="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
