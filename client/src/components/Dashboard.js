import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveysList from "./Surveys/SurveysList.js";

class Dashboard extends Component {
  render() {
    return (
      <div className="container row">
        <SurveysList></SurveysList>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
